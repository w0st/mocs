FactoryGirl.define do
  factory :user do
    login Faker::Hipster.word
    provider Faker::Hipster.word
  end
end