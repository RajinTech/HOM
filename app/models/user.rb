class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader
  has_many :listings

  def admin?
    role == "admin"
  end

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


end
