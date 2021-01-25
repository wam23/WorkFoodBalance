class AddActiveToScoreToken < ActiveRecord::Migration[6.0]
  def change
    add_column :score_tokens, :isActive, :boolean
  end
end
