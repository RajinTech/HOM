class ListingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def show
  end

  def new
  end


end
