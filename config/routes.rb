Rails.application.routes.draw do
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  # delete index from all resources except reviews

  resources :users, only: [:index, :create, :update]
  resources :parks, only: [:index, :create]
  resources :user_parks, only: [:index, :create, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :bucket_lists, only: [:index, :create, :destroy]
  resources :bucket_list_parks, only: [:index, :create, :destroy]
  
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
