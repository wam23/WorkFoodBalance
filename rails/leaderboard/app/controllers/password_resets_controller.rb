class PasswordResetsController < ApplicationController
  before_action :get_user,   only: [:edit, :update]
  before_action :valid_user, only: [:edit, :update]
  before_action :check_expiration, only: [:edit, :update]
  
  def new
  end

  def create
    @user = User.find_by(loginname: params[:password_reset][:loginname].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      flash[:info] = "E-Mail geschickt mit Instruktionen zum Zurücksetzen des Passworts"
      redirect_to root_url
    else
      flash.now[:danger] = "Benutzer nicht gefunden"
      render 'new'
    end
  end

  def edit
  end
  
  def update
    if both_passwords_blank?
      flash.now[:danger] = "Passwort kann nicht leer sein"
      render 'edit'
    elsif @user.update_attributes(user_params)
      log_in @user
      flash[:success] = "Passwort wurde gesetzt"
      redirect_to @user
    else
      render 'edit'
    end
  end
  
  private
  
    def user_params
      params.require(:user).permit(:password, :password_confirmation)
    end

    # Returns true if password & confirmation are blank.
    def both_passwords_blank?
      params[:user][:password].blank? &&
      params[:user][:password_confirmation].blank?
    end

    def get_user
      @user = User.find_by(loginname: params[:loginname])
    end

    # Confirms a valid user.
    def valid_user
      unless (@user && @user.activated? && @user.authenticated?(:reset, params[:id]))
        redirect_to root_url
      end
    end
    
    # Checks expiration of reset token.
    def check_expiration
      if @user.password_reset_expired?
        flash[:danger] = "Passwort zurücksetzen abgelaufen"
        redirect_to new_password_reset_url
      end
    end
end