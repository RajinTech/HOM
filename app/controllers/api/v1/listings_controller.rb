class Api::V1::ListingsController < ApiController
  def index
    render json: Listing.all
  end
  def create
    @listing = Listing.new(listing_params)
    @listing.user = current_user
    binding.pry
    if @listing.save
      render json: { listing: @listing }
    else
      render json: { error: @listing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def listing_params
    params.require(:listing).permit(:street, :unit, :city, :state, :zip, :bedrooms, :bathrooms, :rent, :sq_ft, :date_available, :lease_length)
  end
end
