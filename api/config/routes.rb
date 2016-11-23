Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :restaurants
  resources :orders
  get 'users/current', to: 'users#current'

  get 'auth/github/callback', to: 'sessions#create'
  post 'auth/github/callback', to: 'sessions#create'
  match 'auth/failure', to: redirect('/'), via: [:get, :post]
  match 'signout', to: 'sessions#destroy', as: 'signout', via: [:get, :post]
end
