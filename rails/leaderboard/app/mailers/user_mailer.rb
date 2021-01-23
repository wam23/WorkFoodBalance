class UserMailer < ActionMailer::Base
  default from: "info@hawkie.ch"

  def account_activation(user)
    @user = user
    subject = "Anmeldung bestätigen"
    if @user.activated?
      subject ="Anmeldung erhalten"
    end
    mail to: user.email, subject: subject, bcc: "info@hawkie.ch"
  end

  def password_reset(user)
    @user = user
    mail to: user.email, subject: "Passwort Reset", bcc: "info@hawkie.ch"
  end
  
  def activation_successful(user)
    @user = user
    mail to: user.email, subject: "Zahlungsinformationen", bcc: "info@hawkie.ch"
  end
  
end
