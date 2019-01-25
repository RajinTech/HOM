class Listing < ApplicationRecord
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
  validates :bedrooms, presence: true
  validates :bathrooms, presence: true
  validates :rent, presence: true
  validates :date_available, presence: true
  validates :lease_length, presence: true
  validates :sq_ft, presence: true
  validates :timestamps, presence: true

  belongs_to :user
end
