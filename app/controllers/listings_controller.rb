class ListingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def destroy
    Listing.find(params['id']).delete
    render json: { "successful": "Listing Deleted" }
  end

end
