class OrdersController < ApplicationController

  def index
    render json: Order.where(owner: current_user), include: ['meals']
  end

  def create
    order = Order.new(status: 'Created')
    restaurant = Restaurant.where(name: order_params[:restaurant]).first_or_initialize
    order.restaurant = restaurant
    order.owner = current_user
    if order.save
      render json: order, status: :created
    else
      render_error(order, :unprocessable_entity)
    end
  end

  def update
    order = Order.where(id: params[:id], owner: current_user).first
    order.status = order_params[:status]
    if order.save
      render json: order, status: :ok
    else
      render_error(order, :unprocessable_entity)
    end

  end

  def destroy
    order = Order.where(id: params[:id], owner: current_user).first
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


end
