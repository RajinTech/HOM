class ListingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def show
  end

  def new
  end

  def create
    @listing = Listing.new!(listing_params)
    if @listing.save!
      render json: { listing: @listing }
    else
      render json: { error: @listing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def listing_params
    params.require(:podcast).permit(:street, :unit, :city, :state, :zip, :bedrooms, :bathrooms, :rent, :sq_ft, :date_available, :lease_length)
  end
end
