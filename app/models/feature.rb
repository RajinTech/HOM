class Feature < ApplicationRecord
  validates :bedrooms, presence: true
  validates :bathrooms, presence: true
  validates :rent, presence: true
  validates :date_available, presence: true
  validates :lease_length, presence: true

  belongs_to :listing
end
