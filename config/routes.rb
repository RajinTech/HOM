Rails.application.routes.draw do
  root 'listings#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :listings, only: [:index, :show, :new, :create, :destroy, :edit]

  namespace 'api' do
    namespace 'v1' do
      resources :listings, only: [:index, :create, :show, :destroy, :edit]
      resources :amenities, only: [:show, :index, :create, :destroy, :edit]
      resources :pictures, only: [:show, :index, :create, :destroy, :edit]
    end
  end
end
