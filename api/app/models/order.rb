class Order < ApplicationRecord
  belongs_to :owner, class_name: :User
  has_one :purchaser, class_name: :User
  belongs_to :restaurant
  has_many :meals

  validates :status, :owner, :restaurant, presence: true

  def restaurant_name
    restaurant.name
  end
end
