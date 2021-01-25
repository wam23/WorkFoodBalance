class LeaderBoardEntry < ApplicationRecord
    attr_accessor :hash, :token

    # TODO: parse json level files...
    @@maxCoins = 44;
    @@maxSausages = 38;
    @@maxFlags = 36;
    @@maxCharacters = 7;
    @@maxRemainingtime = 110 + 110 + 70; # level 1-3

    def self.maxCoins
        @@maxCoins
    end
    def self.maxCoins=(number)
        @@maxCoins = number
    end

    def self.maxSausages
        @@maxSausages
    end
    def self.maxSausages=(number)
        @@maxSausages = number
    end

    def self.maxFlags
        @@maxFlags
    end
    def self.maxFlags=(number)
        @@maxFlags = number
    end

    def self.maxCharacters
        @@maxCharacters
    end
    def self.maxCharacters=(number)
        @@maxCharacters = number
    end

    def self.maxRemainingtime
        @@maxRemainingtime
    end
    def self.maxRemainingtime=(number)
        @@maxRemainingtime = number
    end

    default_scope -> { order(score: :desc) }
    self.per_page = 10

end