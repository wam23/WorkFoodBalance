class ScoreToken < ApplicationRecord
    
    def activateToken
        self.token = ScoreToken.new_token
        self.isActive = true;
    end

    # Returns a random token.
    def ScoreToken.new_token
        SecureRandom.urlsafe_base64
    end
end
