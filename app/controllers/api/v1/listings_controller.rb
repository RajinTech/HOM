class Api::V1::ListingsController < ApiController

  def picturesfirst
    Listing.all.map do |listing|
    listing.pictures.first
  end
  end

  def alllistings
    Listing.all
  end

  def attatchpics
    alllistings.each do |listing|
      picturesfirst.each do |picture|
        if picture.listing_id == listing.id
          listing[:zip] = picture.image
        end
      end
    end
  end

  def index
     render json: [attatchpics
       ]

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
