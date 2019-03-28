# Model Info : Amenity
# validates :building_style, presence: true
# validates :parking_spaces, presence: true
#
# belongs_to :listing
#
# Schema Info:
#   Table: Amenity
#
# t.string "building_style", null: false
# t.integer "parking_spaces", null: false
# t.boolean "pets"
# t.string "zoning"
# t.string "school_district"
# t.string "heating"
# t.string "cooling"
# t.boolean "hud"
# t.boolean "smoking"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.bigint "listing_id"
# t.index ["listing_id"], name: "index_amenities_on_listing_id"

require 'rails_helper'

RSpec.describe Amenity, type: :model do
  context 'validation tests'do
    it 'expect amenity to save' do

      user = FactoryBot.create(:user)
      listing = Listing.new( { street: "14 Washington St", unit: '', city: "Oneonta", state: "NY", zip: "13820", latitude: 42.458542, longitude: -75.064056,  user_id: 3} ).save!

      amenity = Amenity.new( { building_style: "duplex", parking_spaces: 0, pets: false, zoning: "residential", school_district: "Center", heating: "gas", cooling: "central air", hud: false, smoking: false, listing_id: 1 } ).save!

      expect(amenity).to eq(true)
    end
  end
end
