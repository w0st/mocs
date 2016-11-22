class OrdersController < ApplicationController

  def index
    render json: Order.all, include: ['meals']
  end

  def create
    order = Order.new(order_params)
    order.owner = User.first
    order.restaurant_id = restaurant_id.to_i
    if order.save
      render json: order, status: :created
    else
      render_error(order, :unprocessable_entity)
    end
  end

  #TODO (new status)
  def update

  end

  def destroy
    order = Order.find(params[:id])
    if order.destroy
      render json: order, status: :ok
    else
      render_error(order, :unprocessable_entity)
    end
  end

  private

  def order_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end

  def restaurant_id
    params['relationships']['restaurant']['data']['id']
  end

end
