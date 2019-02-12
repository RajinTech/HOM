class ListingShowSerializer < ActiveModel::Serializer
  attributes :id, :street, :unit, :city, :state, :zip, :longitude, :latitude

  def pictures
    object.pictures.first.image
  end

  def amenities
    object.amenity
  end

  def features
    object.feature
  end

end
