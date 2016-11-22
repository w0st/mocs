FactoryGirl.define do
  factory :user do
    uid Faker::Hipster.word
    provider Faker::Hipster.word
  end
end