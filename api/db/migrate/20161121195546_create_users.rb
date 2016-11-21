class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :login, null: false
      t.string :provider, null: false
      t.string :email

      t.timestamps
    end
    add_index :users, [:login, :provider], unique: true
  end
end
