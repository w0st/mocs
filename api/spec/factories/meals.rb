FactoryGirl.define do
  factory :meal do
    name 'Chicken'
    price 0.01
    association :user, factory: :user, uid: 'another'
    association :order, factory: :order
  end
end