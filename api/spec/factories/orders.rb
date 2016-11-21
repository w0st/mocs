FactoryGirl.define do
  factory :order do
    status 'Created'
    created_at DateTime.new(2016, 11, 21, 12, 30, 0)
    association :owner, factory: :user
    association :restaurant, factory: :restaurant
  end
end