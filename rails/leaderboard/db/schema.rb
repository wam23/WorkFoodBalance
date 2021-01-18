# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_18_181805) do

  create_table "leader_board_entries", force: :cascade do |t|
    t.string "acronym"
    t.integer "score"
    t.datetime "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "coins"
    t.integer "sausages"
    t.integer "flags"
    t.integer "remainingtime"
    t.integer "version"
    t.integer "characters"
  end

  create_table "users", force: :cascade do |t|
    t.string "remember_token"
    t.string "activation_token"
    t.string "reset_token"
    t.string "loginname"
    t.string "forename"
    t.string "lastname"
    t.string "email"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin"
  end

end
