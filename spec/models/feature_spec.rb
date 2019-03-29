# Model: Feature
# validates :bedrooms, presence: true
# validates :bathrooms, presence: true
# validates :rent, presence: true
# validates :date_available, presence: true
# validates :lease_length, presence: true
#
# belongs_to :listing
#
# Schema Info: feature
# t.string "bedrooms", default: "", null: false
# t.string "bathrooms", default: "", null: false
# t.string "rent", default: "", null: false
# t.string "date_available", default: "", null: false
# t.string "lease_length", default: "", null: false
# t.integer "sq_ft"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.bigint "listing_id"
# t.index ["listing_id"], name: "index_features_on_listing_id"

require 'rails_helper'

RSpec.describe Feature, type: :model do
  it { should validate_presence_of(:bedrooms)}
  it { should validate_presence_of(:bathrooms)}
  it { should validate_presence_of(:rent)}
  it { should validate_presence_of(:date_available)}
  it { should validate_presence_of(:lease_length)}

  it 'expect feature to save' do
    featurebot = FactoryBot.create(:feature)
    expect(featurebot.present?).to eq(true)
  end
end
