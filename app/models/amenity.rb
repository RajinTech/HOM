class Amenity < ApplicationRecord
  validates :building_style, presence: true
  validates :parking_spaces, presence: true

  belongs_to :listing
end
