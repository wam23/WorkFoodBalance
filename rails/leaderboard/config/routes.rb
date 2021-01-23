Rails.application.routes.draw do
    root "leader_board_entries#index"

    get 'password_resets/new'
    get 'password_resets/edit'
    
    get    'login'   => 'sessions#new'
    post   'login'   => 'sessions#create'
    delete 'logout'  => 'sessions#destroy'

    get 'game'       => 'static_pages#game'
    get 'info'       => 'static_pages#info'
    get 'contact'    => 'static_pages#contact'
    get 'signup'     => 'users#new'

    resources :users
    resources :account_activations, only: [:edit]
    resources :password_resets,     only: [:new, :create, :edit, :update]

    get 'users/:id/changeUser' => 'users#changeUser', as: :changeUser
    get 'users/:id/changePassword'  => 'users#changePassword', as: :changePw
    get 'users/:id/changeAdmin' => 'users#changeAdmin', as: :changeAdmin

    resources :leader_board_entries#, only: [:create]
    
    get "/leader_board_entries", to: "leader_board_entries#index"

    #get '/get_high_score', to: "leader_board_entries#getHighScore"
    defaults format: :json do
        get "/get_high_score", to: "leader_board_entries#getHighScore"
        get "/get_high_scores", to: "leader_board_entries#getHighScores"
    end

end
