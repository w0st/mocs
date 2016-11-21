require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  before { create(:restaurant) }

  it { should validate_uniqueness_of(:name) }
  it { should validate_presence_of(:name) }
end
