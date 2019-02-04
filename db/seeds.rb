# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user_list = [
  [ "germany@gmail.com", "germany", "germany" ],
  [ "france@gmail.com", "france", "france" ],
  [ "belgium@gmail.com", "belgium", "belgium" ],
  [ "netherlands@gmail.com", "netherlands", "netherlands" ]
]
user_list.each do |email, password, password_confirmation|
  User.create( email: email, password: password, password_confirmation: password_confirmation )


listings_list = [
  [ "14 Washington St", "", "Oneonta", "NY", "13820", 4, 2, 850, "01/01/2020", 12, 1500, 1 ],
  [ "12 Washington St", "", "Oneonta", "NY", "13820", 4, 2, 850, "01/01/2020", 12, 1500, 1 ],
  [ "2 Depew St", "", "Oneonta", "NY", "13820", 3, 2, 650, "01/01/2020", 12, 1500, 1 ],
  [ "4 Depew St", "", "Oneonta", "NY", "13820", 3, 2, 650, "01/01/2020", 12, 1500, 1 ],
  [ "5 Depew St", "", "Oneonta", "NY", "13820", 2, 1, 550, "01/01/2020", 12, 1500, 1 ],
  [ "7 Depew St", "", "Oneonta", "NY", "13820", 2, 1, 550, "01/01/2020", 12, 1500, 1 ],
  [ "133 Consaul Rd", "A", "Colonie", "NY", "12309", 3, 1, 850, "01/01/2020", 12, 1500, 1 ],
  [ "133 Consaul Rd", "B", "Colonie", "NY", "12309", 3, 1, 850, "01/01/2020", 12, 1500, 1 ],
  [ "659 Lishakill Rd", "1", "Schenectady", "NY", "12212", 3, 1, 850, "01/01/2020", 12, 1500, 1 ],
  [ "659 Lishakill Rd", "2", "Schenectady", "NY", "12212", 3, 1, 850, "01/01/2020", 12, 1500, 1 ],
  [ "659 Lishakill Rd", "3", "Schenectady", "NY", "12212", 3, 1, 850, "01/01/2020", 12, 1500, 1 ],
  [ "659 Lishakill Rd", "4", "Schenectady", "NY", "12212", 3, 1, 850, "01/01/2020", 12, 1500, 1 ],
]
listings_list.each do |street, unit, city, state, zip, bedrooms, bathrooms, rent, date_available, lease_length, sq_ft, user_id|
  Listing.create( street: street, unit: unit, city: city, state: state, zip: zip, bedrooms: bedrooms, bathrooms: bathrooms, rent: rent, date_available: date_available, lease_length: lease_length, sq_ft: sq_ft, user_id: user_id )

amenities_list = [
  [ "duplex", 0, false, "residential", "Center", "electric", "central air", false, false, 1 ],
  [ "duplex", 0, false, "residential", "Center", "gas", "", false, false, 2 ],
  [ "duplex", 2, false, "residential", "Riverside", "gas", "", false, false, 3 ],
  [ "duplex", 2, false, "residential", "Riverside", "gas", "", false, false, 4 ],
  [ "duplex", 2, false, "residential", "Riverside", "gas", "", false, false, 5 ],
  [ "duplex", 2, false, "residential", "Riverside", "gas", "", false, false, 6 ],
  [ "duplex", 2, false, "residential", "Colonie", "gas", "", false, false, 7 ],
  [ "duplex", 2, false, "residential", "Colonie", "gas", "", false, false, 8 ],
  [ "multi-family", 2, false, "residential", "Niskayuna", "gas", "central air", false, false, 9 ],
  [ "multi-family", 2, false, "residential", "Niskayuna", "gas", "central air", false, false, 10 ],
  [ "multi-family", 2, false, "residential", "Niskayuna", "gas", "central air", false, false, 11 ],
  [ "multi-family", 2, false, "residential", "Niskayuna", "gas", "central air", false, false, 12 ]

]
amenities_list.each do |type, parking_spaces, pets, zoning, school_district, heating, cooling, hud, smoking, listing_id|
  Amenity.create( type: type, parking_spaces: parking_spaces, pets: pets, zoning: zoning, school_district: school_district, heating: heating, cooling: cooling, hud: hud, smoking: smoking, listing_id: listing_id )
