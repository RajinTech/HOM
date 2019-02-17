class ListingNewSerializer < ActiveModel::Serializer
  attributes :id, :street, :unit, :city, :state, :zip, :longitude, :latitude

binding.pry
end
