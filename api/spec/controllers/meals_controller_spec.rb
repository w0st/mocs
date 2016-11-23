require 'rails_helper'

RSpec.describe MealsController, type: :controller do
  let!(:restaurant) { create(:restaurant, name: 'M. Gessler') }
  let!(:user) { create(:user, id: 1, oauth_token: 'abc') }
  let!(:order) { create(:order, owner: user) }

  before do
    @request.headers["Content-Type"] = 'application/vnd.api+json'
    @request.headers["X-Api-Key"] = user.oauth_token
  end

  context '#create' do

    it 'valid data' do
      expect do
        post :create, params: {
            order_id: order.id,
            data: {
                type: 'meal',
                attributes: {
                    name: 'Pizza',
                    price: '19.28'
                }
            }
        }
      end.to change(Meal, :count).by(1)
      body = JSON.parse response.body
      expect(body['data']['id']).to be
    end
  end
end