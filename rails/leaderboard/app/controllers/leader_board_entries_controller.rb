class LeaderBoardEntriesController < ApplicationController
    
    MAX_TOKEN_TIME = 5.0
    
    protect_from_forgery unless: -> { request.format.json? }
    skip_before_action :verify_authenticity_token, only:[:create]

    def index
        @leader_board_entries = LeaderBoardEntry.paginate(page: params[:page])

        if (params.has_key?(:page))
            pageIndex = params[:page].to_i - 1
        else
            pageIndex = 0;
        end
        @rankOffset = pageIndex * LeaderBoardEntry.per_page + 1
    end

    def show
        #@leader_board_entry = LeaderBoardEntry.find(params[:id])
    end
    
    def create
        @leader_board_entry = LeaderBoardEntry.new(leader_board_entry_params)

        hash = 0;
        scoreString = "YB" + @leader_board_entry.score.to_s + "rocks";
        for i in 1..scoreString.length
            char = scoreString[i - 1].ord
            hash = ((hash << 2) - hash) + char
            hash = hash & hash;
        end

        scoretoken = ScoreToken.find_by(token: @leader_board_entry.token.to_s)
        tokenTimeAccepted = false
        if (scoretoken != nil)
            diff = Time.now - scoretoken.created_at
            tokenTimeAccepted = (diff <= LeaderBoardEntriesController::MAX_TOKEN_TIME) and scoretoken.isActive
        end
        
        if (tokenTimeAccepted and @leader_board_entry.hash.to_s.eql? hash.to_s and @leader_board_entry.coins <= LeaderBoardEntry.maxCoins and @leader_board_entry.sausages <= LeaderBoardEntry.maxSausages and @leader_board_entry.flags <= LeaderBoardEntry.maxFlags and @leader_board_entry.remainingtime <= LeaderBoardEntry.maxRemainingtime and @leader_board_entry.characters <= LeaderBoardEntry.maxCharacters)
            @leader_board_entry.score = 0
            @leader_board_entry.score += (10 * @leader_board_entry.coins)
            @leader_board_entry.score += (10 * @leader_board_entry.sausages)
            @leader_board_entry.score += (10 * @leader_board_entry.flags)
            @leader_board_entry.score += @leader_board_entry.remainingtime
            if (@leader_board_entry.characters == 7)
                @leader_board_entry.score += 200
            end
            @leader_board_entry.save
        end

        # clean up
        if (scoretoken != nil)
            scoretoken.isActive = false
            scoretoken.delete
        end
        ScoreToken.where("created_at <= ?", Time.zone.now.beginning_of_day).delete_all
    end

    def getScoreToken
        scoreToken = ScoreToken.new()
        scoreToken.activateToken
        scoreToken.save
        render json: {token: scoreToken.token}, status: :ok
    end

    def getHighScore
        render json: {highscore: LeaderBoardEntry.maximum("score")}, status: :ok
    end

    def getHighScores
        entries = LeaderBoardEntry.order(:score).first(3)
        render json: entries.to_json(only: ["acronym", "score"])
    end

    def getTopHighScores
        entries = LeaderBoardEntry.order(:score).first(10)
        render json: entries.to_json(only: ["acronym", "score"])
    end

    def destroy
        LeaderBoardEntry.find(params[:id]).destroy
        flash[:success] = "Eintrag gelöscht"
        redirect_to leader_board_entries_url
      end

    private
        def leader_board_entry_params
            params.require(:leader_board_entry).permit(:acronym, :coins, :sausages, :flags, :characters, :score, :remainingtime, :version, :hash, :token)
        end

end
