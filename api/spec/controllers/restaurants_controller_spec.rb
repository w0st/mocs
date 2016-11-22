require 'rails_helper'

RSpec.describe RestaurantsController, type: :controller do

  let!(:restaurant) { create(:restaurant, name: 'M. Gessler') }
  let!(:restaurant2) { create(:restaurant, name: 'Chinese Food') }

  it '#index' do
    get :index
    assert_response :success
    assert_equal response.content_type, 'application/vnd.api+json'
    body = JSON.parse response.body
    expect(body['data'].size).to eq(2)
  end

  context '#create' do

    before { @request.headers["Content-Type"] = 'application/vnd.api+json' }

    it 'invalid data' do
      expect do
        post :create, params: {
            data: {
                type: 'restaurants',
                attributes: {
                    name: nil
                }
            }
        }
      end.to change(Restaurant, :count).by(0)
      assert_response 422
    end

    it 'valid data' do
      expect do
        post :create, params: {
          data: {
              type: 'restaurants',
              attributes: {
                  name: 'GreatPizza'
              }
          }
        }
      end.to change(Restaurant, :count).by(1)
      body = JSON.parse response.body
      expect(body['data']['id']).to be
    end

  end

end
