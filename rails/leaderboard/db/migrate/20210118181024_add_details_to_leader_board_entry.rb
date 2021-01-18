class AddDetailsToLeaderBoardEntry < ActiveRecord::Migration[6.0]
  def change
    add_column :leader_board_entries, :coins, :integer
    add_column :leader_board_entries, :sausages, :integer
    add_column :leader_board_entries, :flags, :integer
    add_column :leader_board_entries, :remainingtime, :integer
    add_column :leader_board_entries, :version, :integer
  end
end
