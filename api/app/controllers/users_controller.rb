class UsersController < ApplicationController
  def current
    user = User.where(oauth_token: request.headers["X-Api-Key"])
    render json: user
  end

end
