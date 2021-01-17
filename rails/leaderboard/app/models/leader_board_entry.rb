class LeaderBoardEntry < ApplicationRecord

    default_scope -> { order(score: :desc) }

end
