class Picture < ApplicationRecord
  validates :timestamps, presence: true
  belongs_to :listing
end
