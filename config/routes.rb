Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # user routes
  post '/signup', to: "users#create" 
  get '/me', to: "users#show"

  # session routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  # song routes
  post '/savesong', to: "songs#create"
  delete '/deletesong', to: "songs#destroy"

end
