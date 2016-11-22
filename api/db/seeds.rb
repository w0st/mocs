# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(uid: 'someone', provider: 'Github', email: 'someone@domain.com')
user2 = User.create(uid: 'someone2', provider: 'Github', email: 'someone2@domain.com')
restaurant = Restaurant.create(name: 'Chinese Food')
restaurant2 = Restaurant.create(name: 'M. Gessler')
order = Order.create(owner: user, restaurant: restaurant, status: 'Created', created_at: DateTime.now)
order2 = Order.create(owner: user, restaurant: restaurant2, status: 'Created', created_at: DateTime.now)
Meal.create(name: 'Chicken', price: 16.50, order: order, user: user)
Meal.create(name: 'Beef', price: 99.99, order: order, user: user2)
