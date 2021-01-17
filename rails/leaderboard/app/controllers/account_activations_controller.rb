class AccountActivationsController < ApplicationController
  
  def edit
    user = User.find_by(loginname: params[:loginname])
    if user && !user.activated? && user.authenticated?(:activation, params[:id])
      user.activate
      log_in user
      flash[:success] = "Anmeldung bestätigt"
      redirect_to user
    else
      flash[:danger] = "Ungültiger Aktivierungs-Link"
      redirect_to root_url
    end
  end
  
end
