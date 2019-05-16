Rails.application.routes.draw do
  root 'listings#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :listings, only: [:index, :show, :new, :create, :destroy, :update]

  namespace 'api' do
    namespace 'v1' do
      post 'listings/search', to: 'listings#search'
      resources :listings, only: [:index, :create, :show, :destroy, :update]
      resources :amenities, only: [:show, :index, :create]
      resources :pictures, only: [:show, :index, :create]
    end
  end
end
