Rails.application.routes.draw do
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    root "leader_board_entries#index"

    #get 'password_resets/new'
    #get 'password_resets/edit'
    
    #get    'login'   => 'sessions#new'
    #post   'login'   => 'sessions#create'
    #delete 'logout'  => 'sessions#destroy'
    
    #resources :users
    #resources :account_activations, only: [:edit]
    #resources :password_resets,     only: [:new, :create, :edit, :update]

    resources :leader_board_entries, only: [:create]
    
    get "/leader_board_entries", to: "leader_board_entries#index"

    #get '/get_high_score', to: "leader_board_entries#getHighScore"
    defaults format: :json do
        get "/get_high_score", to: "leader_board_entries#getHighScore"
        get "/get_high_scores", to: "leader_board_entries#getHighScores"
    end

end
