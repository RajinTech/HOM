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



  def destroy
    target_id = destroy_listing_params.to_i

    can_delete = (
      !current_user.nil? && (
        current_user == Listing.find(target_id).user ||
        current_user.role == "admin"
      )
    )

    if can_delete
      @listing =Listing.find(target_id)
      if @listing.delete
        render json: { "successful": can_delete }
      else
        render json: { error: @listing.errors.full_messages }, status: :unprocessable_entity
      end
    else
      head 403
    end
  end

  def update
    @listing = Listing.find(params['id'])
      can_edit = (
        !current_user.nil? && (
          current_user == @listing.user ||
          current_user.role == "admin"
        )
      )

    if can_edit
      @listing.update(location_params)
      @listing.feature.update(feature_params)
      @listing.amenity.update(amenity_params)
      @listing.pictures.update(pictures_params)
      if @listing.save
        render json: { listing: @listing }
      else
        render json: { error: @listing.errors.full_messages }, status: :unprocessable_entity
      end
    else
      head 403
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

  def destroy_listing_params
    params.require(:id)
  end

end
