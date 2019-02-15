class Api::V1::ListingsController < ApiController

  def index
     render json: Listing.all
  end

  def create
    @listing = Listing.new(location_params)
    @listing.user = current_user
    if @listing.save
      @listing.feature = Feature.new(feature_params)
      @listing.amenity = Amenity.new(amenitie_params)
      binding.pry
      @listing.pictures.create!(pictures_params)
      render json: { listing: @listing }
    else
      render json: { error: @listing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Listing.find(params["id"]), serializer: ListingShowSerializer
  end

  private
  def location_params
    params.require(:location).permit(:street, :unit, :city, :state, :zip)
  end

  def feature_params
    params.require(:features).permit(:bedrooms, :bathrooms, :rent, :date_available, :lease_length, :sq_ft, :listing_id)
  end

  def amenitie_params
    params.require(:amenities).permit(:building_style, :parking_spaces, :pets, :zoning, :school_district, :heating, :cooling, :hud, :smoking)
  end

  def pictures_params
    params.require(:pictures).permit(:image)
  end



end
