FactoryGirl.define do
  factory :meal do
    name 'Chicken'
    price 0.01
    association :user, factory: :user, login: 'another'
    association :order, factory: :order
  end
end