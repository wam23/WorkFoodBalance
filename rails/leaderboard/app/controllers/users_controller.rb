class UsersController < ApplicationController

    before_action :correct_user,   only: [:edit, :update]
    before_action :admin_user,     only: [:index, :destroy, :changeAdmin]
    
    def new
        @user = User.new
    end
    
    def index
        @users = User.paginate(page: params[:page])
    end
    
    def show
        @user = User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        @user.admin = false
        if @user.save
            @user.send_activation_email
            flash[:info] = "Prüfe Deine E-Mails um die Anmeldung zu bestätigen (Achtung: unser Mail könnte auch im Spam gelandet sein!)"
            redirect_to root_url
        else
            render 'new'
        end
  end
  
  def edit
    @user = User.find(params[:id])
  end
  
  def changePassword
    @user = User.find(params[:id])
  end
  
  def changeAdmin
    @user = User.find(params[:id])
    @user.admin = params[:adminValue]
    @user.save
    redirect_to users_url
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      flash[:success] = "Profil aktualisiert"
      redirect_to @user
    else
      render 'edit'
    end
  end
  
  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "Benutzer gelöscht"
    redirect_to users_url
  end
  
  private

    def user_params
      params.require(:user).permit(:loginname, :forename, :lastname, :email, :password, :password_confirmation, :birthdate)
    end
    
    # Before filters

    # Confirms a logged-in user.
    def logged_in_user
      unless logged_in?
        store_location
        flash[:danger] = "Log Dich bitte ein"
        redirect_to login_url
      end
    end
    
    # Confirms the correct user.
    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless current_user?(@user)
    end
    
    # Confirms an admin user.
    def admin_user
      redirect_to(root_url) unless (current_user != nil && current_user.admin?)
    end
    

end
