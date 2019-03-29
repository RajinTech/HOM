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
  it { should validate_presence_of(:building_style)}
  it { should validate_presence_of(:parking_spaces)}

    it 'expect amenity to save' do
      amenitybot = FactoryBot.create(:amenity)
      expect(amenitybot.present?).to eq(true)
    end
  end
end
