Rails.application.routes.draw do
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '/users', to: 'users#index'
  get '/parks', to: 'parks#index'
  get '/userparks', to: 'user_parks#index'
  get '/bucketlists', to: 'bucket_lists#index'
  get '/bucketlistparks', to: 'bucket_list_parks#index'
  get '/reviews', to: 'reviews#index'
  
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
