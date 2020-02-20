Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  # delete 'posts/:id' => 'posts#destroy'

  resources :users, only: [:show, :edit, :update]
  resources :posts, only: [:new, :create]
end
