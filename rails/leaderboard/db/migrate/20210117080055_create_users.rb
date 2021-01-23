class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :loginname
      t.datetime :created_at
      t.datetime :updated_at
      t.string :password_digest
      t.string :remember_digest
      t.boolean :admin, null: false
      t.string :activation_digest
      t.boolean :activated, default: false
      t.datetime :activated_at
      t.string :reset_digest
      t.datetime :reset_sent_at
      t.string :forename
      t.string :lastname
      t.datetime :birthdate
      t.index ["loginname"], name: "index_users_on_loginname", unique: true
    end
  end
end
