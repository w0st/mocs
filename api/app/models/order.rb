class Order < ApplicationRecord
  belongs_to :owner, class_name: :User
  has_one :purchaser, class_name: :User
  belongs_to :restaurant

  validates :status, :owner, :restaurant, presence: true
end
