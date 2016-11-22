class AddOauthTokenAddAauthExpiresAtToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :oauth_token, :string
    add_column :users, :oauth_expires_at, :datetime
    rename_column :users, :login, :uid
  end
end
