class SessionsController < ApplicationController
  
  def new
  end

  def create
    user = User.find_by(loginname: params[:session][:loginname].downcase)
    if user && user.authenticate(params[:session][:password])
      if user.activated?
        log_in user
        params[:session][:remember_me] == '1' ? remember(user) : forget(user)
        redirect_back_or user
      else
        message  = "Account nicht aktiviert"
        message += "Prüfe Deine E-Mails mit dem Link zur Aktivierung"
        flash[:warning] = message
        redirect_to root_url
      end
    else
      flash.now[:danger] = 'Ungültige Loginname / Passwort - Kombination'
      render 'new'
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end
  
end
