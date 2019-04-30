class Picture < ApplicationRecord
  belongs_to :listing
  mount_uploader :image, ListingPhotoUploader
end
