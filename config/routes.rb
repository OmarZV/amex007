Rails.application.routes.draw do
  get "/path/to/your/consumer/page", to: "cards#consumer", as: "consumer"
  get "/path/to/your/accept/page", to: "cards#accept", as: "accept"
  root 'cards#index'
  
end
