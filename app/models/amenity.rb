class Amenity < ApplicationRecord
  validates :type, presence: true
  validates :parking_spaces, presence: true
  validates :pets, presence: true
  validates :timestamps, presence: true
  belongs_to :listing, null: false
end
