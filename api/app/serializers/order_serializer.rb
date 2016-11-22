class OrderSerializer < ActiveModel::Serializer
  attributes :id, :status, :created_at, :ordered_at, :delivered_at, :canceled_at, :restaurant_name
  has_many :meals
  class MealSerializer < ActiveModel::Serializer
    attributes :id, :name, :price, :user_login
  end
end