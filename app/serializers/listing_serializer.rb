class ListingSerializer < ActiveModel::Serializer
  attributes :id, :street, :unit, :city, :state, :zip, :longitude, :latitude, :pictures, :amenities, :features

  def pictures
    if !object.pictures.empty?
      return object.pictures.first.image
    end
    return nil
  end

  def amenities
    object.amenity
  end

  def features
    object.feature
  end



end
