Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Almost every application defines a route for the root path ("/") at the top of this file.
  root 'main#index'

  # public
  scope '/', { to: 'main#index' } do
    scope '/auth' do
      get '/sign_up'
      get '/log_in'
    end
  end

  # private
  scope '/', { to: 'main#private' } do
    scope '/users/:username' do
      get '/'
      get '/settings'
      get '/settings/password'
    end
  end

  # api
  namespace :api, { format: 'json' } do
    scope '/auth' do
      post '/sign_up', to: 'users#create'
      post '/log_in', to: 'auth#create'
      delete '/log_out', to: 'auth#destroy'
    end
    resources :users, only: [:show], param: :username
  end
end
