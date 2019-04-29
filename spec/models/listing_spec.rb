require 'rails_helper'

RSpec.describe Listing, type: :model do
  context 'validation tests'do

    it { should validate_presence_of(:street)}
    it { should validate_presence_of(:city)}
    it { should validate_presence_of(:state)}
    it { should validate_presence_of(:zip)}

    it 'expect listing to save' do
      listingbot = FactoryBot.create(:listing)
      expect(listingbot.present?).to eq(true)
    end
  end
end
