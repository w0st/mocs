class MealsController < ApplicationController

  def create
    byebug
    meal = Meal.new(meal_params)
    meal.order = Order.find(params[:order_id])
    meal.user = current_user
    if meal.save
      render json: meal, status: :created
    else
      render_error(meal, :unprocessable_entity)
    end
  end

  # TODO (meal_id)
  def destroy

  end

  private

  def meal_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
