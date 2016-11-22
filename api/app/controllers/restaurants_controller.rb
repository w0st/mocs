class RestaurantsController < ApplicationController


  def index
    render json: Restaurant.all
  end

  def create
    restaurant = Restaurant.new(restaurant_params)
    if restaurant.save
      render json: restaurant, status: :created
    else
      render_error(restaurant, :unprocessable_entity)
    end
  end

  private

  def restaurant_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end