class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env['omniauth.auth'])
    redirect_to "http://localhost:5000/?token=#{user.oauth_token}"
  end

  def destroy
  end
end
