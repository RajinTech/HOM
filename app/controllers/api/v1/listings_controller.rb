class Api::V1::ListingsController < ApiController

  def index
     render json: Listing.all
  end

  def create
    @listing = Listing.new(listing_params)
    @listing.user = current_user
    if @listing.save
      render json: { listing: @listing }
    else
      render json: { error: @listing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Listing.find(params["id"]), serializer: ListingShowSerializer
  end

  private
  def listing_params
    params.require(:listing).permit(:building_style, :parking_spaces, :pets, :zoning, :school_district, :heating, :cooling, :hud, :smoking)
  end
end
