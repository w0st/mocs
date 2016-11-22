class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env['omniauth.auth'])
    session[:user_id] = user.id
    redirect_to "http://localhost:5000/?token=#{user.oauth_token}"
  end

  def destroy
    session[:user_id] = nil
  end
end
