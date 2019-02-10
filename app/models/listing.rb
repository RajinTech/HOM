class Listing < ApplicationRecord
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true


  belongs_to :user
  has_one :amenity
  has_one :feature
  has_many :pictures
end
