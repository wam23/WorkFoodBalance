class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :remember_token
      t.string :activation_token
      t.string :reset_token
      t.string :loginname
      t.string :forename
      t.string :lastname
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
