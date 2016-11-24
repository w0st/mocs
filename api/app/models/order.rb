class Order < ApplicationRecord
  belongs_to :owner, class_name: :User
  has_one :purchaser, class_name: :User
  belongs_to :restaurant
  has_many :meals

  validates :status, :owner, :restaurant, presence: true

  def restaurant_name
    restaurant.name
  end

  def status=(value)
      case value
        when 'Ordered'
            self.ordered_at = DateTime.now
        when 'Canceled'
            self.canceled_at = DateTime.now
        when 'Delivered'
            self.delivered_at = DateTime.now
      end
      write_attribute(:status, value)
  end

  def open?
    self.status == 'Created'
  end
end
