class Restaurant < ApplicationRecord
  has_many :orders

  validates :name, uniqueness: true, presence: true
end
