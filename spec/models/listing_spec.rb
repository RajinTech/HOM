# Model Info: Listing
# validates :street, presence: true
# validates :city, presence: true
# validates :state, presence: true
# validates :zip, presence: true
#
# belongs_to :user
# has_one :amenity
# has_one :feature
# has_many :pictures
#
# Schema Info : Listing
# t.string "street", null: false
# t.string "unit", default: "", null: false
# t.string "city", null: false
# t.string "state", null: false
# t.string "zip", null: false
# t.decimal "latitude"
# t.decimal "longitude"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.bigint "user_id"
# t.index ["user_id"], name: "index_listings_on_user_id"
require 'rails_helper'

RSpec.describe Listing, type: :model do
  context 'validation tests'do
    it 'expect listing to save' do
      listingbot = FactoryBot.create(:listing)
      expect(listingbot.present?).to eq(true)
    end
  end
end
