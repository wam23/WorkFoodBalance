class LeaderBoardEntry < ApplicationRecord

    default_scope -> { order(score: :desc) }
    self.per_page = 10

end
