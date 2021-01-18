class LeaderBoardEntriesController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }
    skip_before_action :verify_authenticity_token, only:[:create]

    def index
        @leader_board_entries = LeaderBoardEntry.all
    end

    def show
        #@leader_board_entry = LeaderBoardEntry.find(params[:id])
    end
    
    def create
        @leader_board_entry = LeaderBoardEntry.new(leader_board_entry_params)
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

    def getHighScore
        render json: {highscore: LeaderBoardEntry.maximum("score")}, status: :ok
    end

    def getHighScores
        entries = LeaderBoardEntry.order(:score).first(3)
        render json: entries.to_json(only: ["acronym", "score"])
    end

    private
        def leader_board_entry_params
            params.require(:leader_board_entry).permit(:acronym, :coins, :sausages, :flags, :characters, :remainingtime, :version)
        end

end
