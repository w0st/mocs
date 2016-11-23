require 'rails_helper'

RSpec.describe OrdersController, type: :controller do

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
            data: {
                type: 'order',
                attributes: {
                    restaurant: restaurant.name
                }
            }
        }
      end.to change(Order, :count).by(1)
      body = JSON.parse response.body
      expect(body['data']['id']).to be
    end
  end

  context '#update' do
    it 'valid data' do
      expect do
        patch :update, params: {
            id: order.id,
            data: {
                type: 'order',
                id: order.id,
                attributes: {
                    status: 'Finalized'
                }
            }
        }
      end.to change{ order.reload.status }.from('Created').to('Finalized')
      assert_response 200
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
