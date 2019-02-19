require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :listing do
      sequence(:street) {|n| "#{n} Main St" }
      sequence(:unit) {|n| "#{n}A" }
      city { "Schenectady" }
      state { "NY" }
      zip { "13820" }
      sequence(:latitude) {|n| "42.44947#{n}" }
      sequence(:longitude) {|n| "-75.06569#{n}" }
      sequence(:user) {|n| "#{n}" }
    end

  factory :amenity do |n|
    building_style { "duplex" }
    parking_spaces { "2" }
    pets { "false" }
    zoning { "residential" }
    school_district { "central" }
    heating { "gas" }
    cooling { "central air" }
    hud { "false" }
    smoking { "false" }
    sequence(:listing_id) {|n| "#{n}" }
  end

  factory :feature do
      sequence(:bedrooms) {|n| "#{n}" }
      sequence(:bathrooms) {|n| "#{n}" }
      sequence(:rent) {|n| "#{n}00" }
      date_available { "2019-03-03" }
      sequence(:lease_length) {|n| "#{n}" }
      sequence(:sq_ft) {|n| "#{n}000" }
      zip { "13820" }
      sequence(:latitude) {|n| "42.44947#{n}" }
      sequence(:longitude) {|n| "-75.06569#{n}" }
      sequence(:listing_id) {|n| "#{n}" }
    end

  factory :picture do
      image {"https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.19.50+PM.png"}
      sequence(:listing_id) {|n| "#{n}" }
    end
end
