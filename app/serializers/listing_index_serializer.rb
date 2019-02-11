class ListingIndexSerializer < ActiveModel::Serializer
  attributes :street, :unit, :city, :state, :zip, :bedrooms, :bathrooms, :rent, :sq_ft, :date_available, :lease_length


  end
