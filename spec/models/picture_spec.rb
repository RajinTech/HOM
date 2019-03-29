require 'rails_helper'

RSpec.describe Picture, type: :model do
  it 'expect picture to save' do
    picturebot = FactoryBot.create(:picture)
    expect(picturebot.present?).to eq(true)
  end
end
