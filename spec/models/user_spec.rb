require 'rails_helper'

RSpec.describe User, type: :model do
  it 'expect user to save' do
    userbot = FactoryBot.create(:user)
    expect(userbot.present?).to eq(true)
  end
end
