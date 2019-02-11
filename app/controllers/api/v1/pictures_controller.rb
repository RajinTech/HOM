class Api::V1::PicturesController < ApiController
  def index
    render json: Picture.all
  end
  def create
    @picture = Picture.new(picture_params)
    @picture.user = current_user
    if @picture.save
      render json: { picture: @picture }
    else
      render json: { error: @picture.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: [Picture.find(params["id"]), Picture.find(params["id"]).listing]

  end

  private
  def picture_params
    params.require(:picture).permit(:image)
  end
end
