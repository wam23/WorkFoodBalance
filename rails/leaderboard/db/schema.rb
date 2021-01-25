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

ActiveRecord::Schema.define(version: 2021_01_24_195749) do

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

  create_table "score_tokens", force: :cascade do |t|
    t.string "token"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "isActive"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "loginname"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "password_digest"
    t.string "remember_digest"
    t.boolean "admin", null: false
    t.string "activation_digest"
    t.boolean "activated", default: false
    t.datetime "activated_at"
    t.string "reset_digest"
    t.datetime "reset_sent_at"
    t.string "forename"
    t.string "lastname"
    t.datetime "birthdate"
    t.index ["loginname"], name: "index_users_on_loginname", unique: true
  end

end
