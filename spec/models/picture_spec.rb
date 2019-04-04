require 'rails_helper'
require 'spec_helper'

require "#{Rails.root}/app/models/picture.rb"

RSpec.describe Picture, type: :model do
  it 'expect picture to save' do
    picturebot = FactoryBot.create(:picture)
    expect(picturebot.present?).to eq(true)
  end
end
