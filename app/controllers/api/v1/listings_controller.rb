class Api::V1::ListingsController < ApiController

  def index
     render json: Listing.all
  end

  def create
    @listing = Listing.new(location_params)
    @listing.user = current_user
    if @listing.save
      @listing.feature = Feature.new(feature_params)
      @listing.amenity = Amenity.new(amenity_params)
      picture = Picture.new(pictures_params)
      picture.listing = @listing
      picture.save
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
    params.permit(:street, :unit, :city, :state, :zip)
  end

  def feature_params
     params.permit(:bedrooms, :bathrooms, :rent, :date_available, :lease_length, :sq_ft, :listing_id)
  end

  def amenity_params
    params.permit(:building_style, :parking_spaces, :pets, :zoning, :school_district, :heating, :cooling, :hud, :smoking)
  end

  def pictures_params
    params.permit(:image)
  end
end
