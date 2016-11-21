class User < ApplicationRecord
  has_many :my_orders, class_name: :Order, foreign_key: 'owner_id'

  validates :login, :provider, presence: true
  validates_uniqueness_of :login, scope: :provider
end
