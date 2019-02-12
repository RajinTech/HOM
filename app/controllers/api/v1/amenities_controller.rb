class Api::V1::AmenitiesController < ApiController
  def index
    render json: Amenity.all
  end
  def create
    @amenity = Amenity.new(amenity_params)
    @amenity.user = current_user
    if @amenity.save
      render json: { amenity: @amenity }
    else
      render json: { error: @amenity.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: [Amenity.find(params["id"]), Amenity.find(params["id"]).listing]

  end

  private
  def amenity_params
    params.require(:amenity).permit(:building_style, :parking_spaces, :pets, :zoning, :school_district, :heating, :cooling, :hud, :smoking)
  end
end
