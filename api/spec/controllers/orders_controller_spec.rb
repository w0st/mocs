require 'rails_helper'

RSpec.describe OrdersController, type: :controller do

  let!(:restaurant) { create(:restaurant, name: 'M. Gessler') }
  let!(:user) { create(:user, id: 1) }
  let!(:order) { create(:order, owner: user) }

  before { @request.headers["Content-Type"] = 'application/vnd.api+json' }

  context '#create' do

    it 'valid data' do
      expect do
        post :create, params: {
            data: {
                type: 'order',
                attributes: {
                    status: 'Created'
                }
            },
            relationships: {
                restaurant: {
                    data: {
                        type: 'restaurant',
                        id: "#{restaurant.id}"
                    }
                }
            }
        }
      end.to change(Order, :count).by(1)
      body = JSON.parse response.body
      expect(body['data']['id']).to be
    end
  end

  context '#delete' do

    it 'valid data' do
      expect do
        delete :destroy, params: {
            id: order.id
        }
      end.to change(Order, :count).by(-1)
      assert_response 200
    end
  end
end
