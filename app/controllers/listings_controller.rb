class ListingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def destroy
    Listing.find(params['id']).delete
    render json: { "successful": "Listing Deleted" }
  end


    def update
      binding.pry
      @listing = Listing.find(params['id'])
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

end
