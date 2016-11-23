class User < ApplicationRecord
  has_many :my_orders, class_name: :Order, foreign_key: 'owner_id'

  validates :uid, :provider, presence: true
  validates_uniqueness_of :uid, scope: :provider

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.oauth_token = auth.credentials.token
      user.email = auth.extra.raw_info.login
      user.oauth_expires_at = Time.at(auth.credentials.expires_at) if auth.credentials.expires_at
      user.save!
    end
  end
end
