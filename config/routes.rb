Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Almost every application defines a route for the root path ("/") at the top of this file.
  root 'main#index'

  # view
  scope '/auth' do
    get '/sign_up', to: 'main#index'
    get '/log_in', to: 'main#index'
    get '/log_out', to: 'main#index'
  end

  # api
  namespace :api do
    resources :users, only: [:create, :show], param: :username
  end
end
