class CreateScoreTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :score_tokens do |t|
      t.string :token

      t.timestamps
    end
  end
end
