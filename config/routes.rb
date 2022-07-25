Rails.application.routes.draw do

  # can delete index from all resources except reviews
  # resources :users, only: [:index, :create, :update]
  resources :user_parks, only: [:index, :create, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :bucket_list_parks, only: [:index, :create, :destroy]

  # routes for signup and login
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
