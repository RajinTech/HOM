class Api::V1::ListingsController < ApiController
  def index
    render json: Listing.all
  end

end
