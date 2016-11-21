class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :status, null: false
      t.datetime :ordered_at
      t.datetime :delivered_at
      t.datetime :canceled_at
      t.belongs_to :owner, null: false
      t.belongs_to :purchaser
      t.references :restaurant, foreign_key: true, null: false

      t.timestamps
    end
  end
end
