class ListingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

end
