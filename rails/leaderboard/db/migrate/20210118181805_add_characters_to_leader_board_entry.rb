class AddCharactersToLeaderBoardEntry < ActiveRecord::Migration[6.0]
  def change
    add_column :leader_board_entries, :characters, :integer
  end
end
