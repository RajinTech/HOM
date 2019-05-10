# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
user_list = [
  { first_name: 'Stephen', last_name: 'Baker', email: "germany@gmail.com", password: "germany", password_confirmation: "germany", role: "tenant"},
  { first_name: 'Nicholas', last_name: 'Baroni', email: "france@gmail.com", password: "france", password_confirmation: "france", role: "tenant"},
  { first_name: 'Anthony', last_name: 'Garrison', email: "belgium@gmail.com", password: "belgium", password_confirmation: "belgium", role: "tenant"},
  { first_name: 'Koby', last_name: 'Marble', email: "netherlands@gmail.com", password: "netherlands", password_confirmation: "netherlands", role: "landlord", profile_photo: "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.19.50+PM.png"},
  { first_name: 'Brian', last_name: 'Ford', email: "bford@gmail.com", password: "brianford", password_confirmation: "brianford", role: "admin", profile_photo: "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.19.50+PM.png"}
]

user_list.each do |attributes|
  User.create!(attributes)
end

listings_list = [
  { street: "14 Washington St", unit: '', city: "Oneonta", state: "NY", zip: "13820", latitude: 42.458542, longitude: -75.064056,  user_id: "1"},
  { street: "12 Washington St", unit: '', city: "Oneonta", state: "NY", zip: "13820", latitude: 42.458520, longitude: -75.064070,  user_id: "1"},
  { street: "2 Depew St", unit: '', city: "Oneonta", state: "NY", zip: "13820", latitude: 42.449471, longitude: -75.065697,  user_id: "1"},
  { street: "4 Depew St", unit: '', city: "Oneonta", state: "NY", zip: "13820", latitude: 42.449470, longitude: -75.065700,  user_id: "1"},
  { street: "5 Depew St", unit: '', city: "Oneonta", state: "NY", zip: "13820", latitude: 42.449139, longitude: -75.065659,  user_id: "1"},
  { street: "7 Depew St", unit: '', city: "Oneonta", state: "NY", zip: "13820", latitude: 42.449140, longitude: -75.065660,  user_id: "1"},
  { street: "133 Consaul Rd", unit: 'A', city: "Colonie", state: "NY", zip: "12212", latitude: 42.743330, longitude: -73.849230,  user_id: "1"},
  { street: "133 Consaul Rd", unit: 'B', city: "Colonie", state: "NY", zip: "12212", latitude: 42.743330, longitude: -73.849230,  user_id: "1"},
  { street: "659 Lishakill Rd", unit: '1', city: "Schenectady", state: "NY", zip: "12309", latitude: 42.771620, longitude: -73.856460,  user_id: "1"},
  { street: "659 Lishakill Rd", unit: '2', city: "Schenectady", state: "NY", zip: "12309", latitude: 42.771620, longitude: -73.856460,  user_id: "1"},
  { street: "659 Lishakill Rd", unit: '3', city: "Schenectady", state: "NY", zip: "12309", latitude: 42.771620, longitude: -73.856460,  user_id: "1"},
  { street: "659 Lishakill Rd", unit: '4', city: "Schenectady", state: "NY", zip: "12309", latitude: 42.771620, longitude: -73.856460,  user_id: "1"},
]

listings_list.each do |attributes|
  Listing.create!(attributes)
end

features_list = [
  { bedrooms: "2", bathrooms: '1', rent: "650", date_available: "2019-02-30", lease_length: "12", sq_ft: 1000 , listing_id: "1"},
  { bedrooms: "2", bathrooms: '1', rent: "650", date_available: "2019-02-30", lease_length: "12", sq_ft: 1000 , listing_id: "2"},
  { bedrooms: "2", bathrooms: '1', rent: "650", date_available: "2019-02-30", lease_length: "12", sq_ft: 1000 , listing_id: "3"},
  { bedrooms: "2", bathrooms: '1', rent: "650", date_available: "2019-02-30", lease_length: "12", sq_ft: 1000 , listing_id: "4"},
  { bedrooms: "2", bathrooms: '1', rent: "650", date_available: "2019-02-30", lease_length: "12", sq_ft: 1000 , listing_id: "5"},
  { bedrooms: "2", bathrooms: '1', rent: "650", date_available: "2019-02-30", lease_length: "12", sq_ft: 1000 , listing_id: "6"},
  { bedrooms: "2", bathrooms: '1', rent: "850", date_available: "2019-02-30", lease_length: "12", sq_ft: 1250 , listing_id: "7"},
  { bedrooms: "2", bathrooms: '1', rent: "850", date_available: "2019-02-30", lease_length: "12", sq_ft: 1250 , listing_id: "8"},
  { bedrooms: "2", bathrooms: '1', rent: "1000", date_available: "2019-02-30", lease_length: "12", sq_ft: 1500 , listing_id: "9"},
  { bedrooms: "2", bathrooms: '1', rent: "1000", date_available: "2019-02-30", lease_length: "12", sq_ft: 1500 , listing_id: "10"},
  { bedrooms: "2", bathrooms: '1', rent: "1000", date_available: "2019-02-30", lease_length: "12", sq_ft: 1500 , listing_id: "11"},
  { bedrooms: "2", bathrooms: '1', rent: "1000", date_available: "2019-02-30", lease_length: "12", sq_ft: 1500 , listing_id: "12"},
]

features_list.each do |attributes|
  Feature.create!(attributes)
end


amenities_list = [
  { building_style: "duplex", parking_spaces: 0, pets: false, zoning: "residential", school_district: "Center", heating: "gas", cooling: "central air", hud: false, smoking: false, listing_id: 1 },
  { building_style: "duplex", parking_spaces: 0, pets: false, zoning: "residential", school_district: "Center", heating: "gas", cooling: "", hud: false, smoking: false, listing_id: 2 },
  { building_style: "duplex", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Riverside", heating: "gas", cooling: "", hud: false, smoking: false, listing_id: 3 },
  { building_style: "duplex", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Riverside", heating:"gas", cooling: "", hud: false, smoking: false, listing_id: 4 },
  { building_style: "duplex", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Riverside", heating:"gas", cooling: "", hud: false, smoking: false, listing_id: 5 },
  { building_style: "duplex", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Riverside", heating:"gas", cooling: "", hud: false, smoking: false, listing_id: 6 },
  { building_style: "duplex", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Colonie", heating: "gas", cooling: "", hud: false, smoking: false, listing_id: 7 },
  { building_style: "duplex", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Colonie", heating: "gas", cooling: "", hud: false, smoking: false, listing_id: 8 },
  { building_style: "multi-family", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Niskayuna", heating: "gas", cooling:"central air", hud: false, smoking: false, listing_id: 9 },
  { building_style: "multi-family", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Niskayuna", heating: "gas", cooling:"central air", hud: false, smoking: false, listing_id: 10 },
  { building_style: "multi-family", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Niskayuna", heating: "gas", cooling:"central air", hud: false, smoking: false, listing_id: 11 },
  { building_style: "multi-family", parking_spaces: 2, pets: false, zoning: "residential", school_district: "Niskayuna", heating: "gas", cooling:"central air", hud: false, smoking: false, listing_id: 12 }

]
amenities_list.each do |attributes|
  Amenity.create!(attributes)
end

picture_list = [
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.12.46+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.16.24+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.16.35+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.16.44+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.16.51+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.17.03+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.17.25+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.17.39+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.17.48+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.17.58+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.18.06+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.18.19+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.18.25+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.18.35+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.18.58+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.19.06+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.19.15+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.19.27+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.19.36+PM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.09.06+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.09.01+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.08.55+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.08.48+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.08.40+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.08.02+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.07.39+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.07.05+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.06.47+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.06.40+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.06.32+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.06.24+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.05.55+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.05.47+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.05.40+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.05.32+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.05.25+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.05.18+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.04.56+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.04.49+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.04.41+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.04.31+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.04.23+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.04.13+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.04.04+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.03.35+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.03.28+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.03.19+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.03.09+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.03.03+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.02.53+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.02.29+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.02.19+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.02.10+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.02.04+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-13+at+2.01.57+AM.png",  "1" ],
  [ "https://s3.amazonaws.com/hom-development/Screen+Shot+2019-02-05+at+8.19.50+PM.png",  "1" ]
]

12.times do |n|
  picture_list.shuffle.each do |image, listing_id|
   Picture.create!(image: image, listing_id: n+1)
  end
end
