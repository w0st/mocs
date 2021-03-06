class ApplicationController < ActionController::API
  before_action :check_header

  private

  def check_header
    if ['POST','PUT','PATCH'].include? request.method
      if request.content_type != "application/vnd.api+json"
        head 406 and return
      end
    end
  end

  def render_error(resource, status)
    render json: resource, status: status, adapter: :json_api,
           serializer: ActiveModel::Serializer::ErrorSerializer
  end

  def current_user
    if request.headers["X-Api-Key"]
      User.where(oauth_token: request.headers["X-Api-Key"]).first
    else
      nil
    end
  end



end
