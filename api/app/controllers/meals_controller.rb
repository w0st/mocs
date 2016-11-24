class MealsController < ApplicationController

  def create
    order = Order.find(params[:order_id])
    if order.open?
      meal = Meal.new(meal_params)
      meal.order = order
      meal.user = current_user
      if meal.save
        render json: meal, status: :created
      else
        render_error(meal, :unprocessable_entity)
      end
    else
      render_error(order, :unprocessable_entity)
    end
  end

  def destroy
    meal = Meal.where(id: params[:id], user: current_user).first
    if meal.destroy
      render json: meal, status: :ok
    else
      render_error(meal, :unprocessable_entity)
    end
  end

  private

  def meal_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
