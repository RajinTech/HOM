class ListingShowSerializer < ActiveModel::Serializer
  attributes :id, :street, :unit, :city, :state, :zip, :longitude, :latitude, :pictures, :amenities, :features, :current_user

  def pictures
    object.pictures
  end

  def amenities
    object.amenity
  end

  def features
    object.feature
  end

end
