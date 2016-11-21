require 'rails_helper'

RSpec.describe Meal, type: :model do
  before { create(:meal) }

  it { should validate_presence_of(:user) }
  it { should validate_presence_of(:order) }
  it { should validate_presence_of(:price) }
  it { should validate_presence_of(:name) }
end
