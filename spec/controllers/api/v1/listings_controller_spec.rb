# require "rails_helper"
#
# RSpec.describe Api::V1::ListingsController, type: :controller do
#   before :each do
#     3.times do |i|
#       listing = FactoryBot.create(:listing)
#       listing.user << FactoryBot.create(:user)
#     end
#   end
#
#   describe "GET#index" do
#     it 'should return a list of listings' do
#       get :index
#       returned_json = JSON.parse(response.body)
#       expect(returned_json).to eq(
#         [
#           {"street"=>"1 Main St", "unit"=>"1A", "city"=>"Schenectady", "state"=>"NY", "zip"=>"13820", "latitude"=>"42.449471", "longitude"=>"-75065691", "user"=>"1"},
#           {"street"=>"2 Main St", "unit"=>"2A", "city"=>"Schenectady", "state"=>"NY", "zip"=>"13820", "latitude"=>"42.449472", "longitude"=>"-75065692", "user"=>"2"},
#           {"street"=>"3 Main St", "unit"=>"3A", "city"=>"Schenectady", "state"=>"NY", "zip"=>"13820", "latitude"=>"42.449473", "longitude"=>"-75065693", "user"=>"3"}
#         ]
#       )
#     end
#   end
#
#   describe "GET#show" do
#     it 'should return the information of a single listing' do
#       id = Podcast.first.id
#       get :show, params: {id: id}
#       returned_json = JSON.parse(response.body)
#       expect(returned_json).to eq(
#       {
#         "street"=>"1 Main St",
#         "unit"=>"1A",
#         "city"=>"Schenectady",
#         "state"=>"NY",
#         "zip"=>"13820",
#         "latitude"=>"42.449471",
#         "longitude"=>"-75065691",
#         "user"=>id}
#       )
#     end
#   end
# end
