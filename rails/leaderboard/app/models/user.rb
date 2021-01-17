class User < ActiveRecord::Base
    include UsersHelper
    
    attr_accessor :remember_token, :activation_token, :reset_token
    
    default_scope -> { order(lastname: :asc) }
    
    before_save   :downcase_email
    before_save   :downcase_loginname
    before_create :create_activation_digest
    
    validates :loginname, presence: true, length: { maximum: 64 }, uniqueness: { case_sensitive: false }
    validates :forename,  presence: true, length: { maximum: 64 }
    validates :lastname,  presence: true, length: { maximum: 64 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
                        format: { with: VALID_EMAIL_REGEX }
    
    has_secure_password
    validates :password, length: { minimum: 6 }, allow_blank: true
    
    # Returns the hash digest of the given string.
    def User.digest(string)
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                    BCrypt::Engine.cost
      BCrypt::Password.create(string, cost: cost)
    end
    
    # Returns a random token.
    def User.new_token
      SecureRandom.urlsafe_base64
    end
    
    # Remembers a user in the database for use in persistent sessions.
    def remember
      self.remember_token = User.new_token
      update_attribute(:remember_digest, User.digest(remember_token))
    end
    
    # Forgets a user.
    def forget
      update_attribute(:remember_digest, nil)
    end
    
    # Returns true if the given token matches the digest.
    def authenticated?(attribute, token)
      digest = self.send("#{attribute}_digest")
      return false if digest.nil?
      BCrypt::Password.new(digest).is_password?(token)
    end
    
    # Activates an account.
    def activate
      update_attribute(:activated, true)
      update_attribute(:activated_at, Time.zone.now)
    end
  
    # Sends activation email.
    def send_activation_email
      UserMailer.account_activation(self).deliver
    end
    
    # Sends paying information email.
    def send_activation_successful_email
      UserMailer.activation_successful(self).deliver
    end
    
    # Sets the password reset attributes.
    def create_reset_digest
      self.reset_token = User.new_token
      update_attribute(:reset_digest,  User.digest(reset_token))
      update_attribute(:reset_sent_at, Time.zone.now)
    end
  
    # Sends password reset email.
    def send_password_reset_email
      UserMailer.password_reset(self).deliver
    end
    
    # Returns true if a password reset has expired.
    def password_reset_expired?
      reset_sent_at < 2.hours.ago
    end
    
    def name
      self.lastname + " " + self.forename
    end
    
    private
    
      # Converts email to all lower-case.
      def downcase_email
        self.email = email.downcase
      end
      
      # Converts loginname to all lower-case.
      def downcase_loginname
        self.loginname = loginname.downcase
      end
      
      # Creates and assigns the activation token and digest.
      def create_activation_digest
        self.activation_token  = User.new_token
        self.activation_digest = User.digest(activation_token)
      end
    
  end
  