class Meal < ApplicationRecord
  belongs_to :order
  belongs_to :user

  validates :order, :user, :name, :price, presence: true
  validates :price, numericality: { greater_than: 0.00 }
  validates :user, uniqueness: { scope: :order }
end
