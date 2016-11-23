class UserSerializer < ActiveModel::Serializer
  attributes :uid, :provider, :email
end