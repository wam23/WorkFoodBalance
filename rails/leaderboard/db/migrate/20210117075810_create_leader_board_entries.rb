class CreateLeaderBoardEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :leader_board_entries do |t|
      t.string :acronym
      t.integer :score
      t.datetime :date

      t.timestamps
    end
  end
end
