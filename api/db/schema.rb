# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161121214308) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "meals", force: :cascade do |t|
    t.string   "name"
    t.decimal  "price",      precision: 5, scale: 2
    t.integer  "order_id",                           null: false
    t.integer  "user_id",                            null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.index ["order_id"], name: "index_meals_on_order_id", using: :btree
    t.index ["user_id"], name: "index_meals_on_user_id", using: :btree
  end

  create_table "orders", force: :cascade do |t|
    t.string   "status",        null: false
    t.datetime "ordered_at"
    t.datetime "delivered_at"
    t.datetime "canceled_at"
    t.integer  "owner_id",      null: false
    t.integer  "purchaser_id"
    t.integer  "restaurant_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["owner_id"], name: "index_orders_on_owner_id", using: :btree
    t.index ["purchaser_id"], name: "index_orders_on_purchaser_id", using: :btree
    t.index ["restaurant_id"], name: "index_orders_on_restaurant_id", using: :btree
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_restaurants_on_name", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "login",      null: false
    t.string   "provider",   null: false
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["login", "provider"], name: "index_users_on_login_and_provider", unique: true, using: :btree
  end

  add_foreign_key "meals", "orders"
  add_foreign_key "meals", "users"
  add_foreign_key "orders", "restaurants"
end
