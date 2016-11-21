require 'rails_helper'

RSpec.describe User, type: :model do
  before { create(:user) }

  it { should validate_presence_of(:login) }
  it { should validate_presence_of(:provider) }
  it { should validate_uniqueness_of(:login).scoped_to(:provider) }
end
