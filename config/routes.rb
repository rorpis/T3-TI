Rails.application.routes.draw do
  resources :markers
  resources :airports
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'markers#index'
end

