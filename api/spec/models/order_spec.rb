require 'rails_helper'

RSpec.describe Order, type: :model do
  before { create(:order) }

  it { should validate_presence_of(:status) }
  it { should validate_presence_of(:owner) }
  it { should validate_presence_of(:restaurant) }
  # May consider checking: created_at < finalized_at < ordered_at < delivered_at
  # created_at < canceled_at

end
