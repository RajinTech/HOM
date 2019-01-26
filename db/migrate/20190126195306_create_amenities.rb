class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.string :type, null: false
      t.string :parking_spaces, null: false
      t.boolean :pets, null: false
      t.string :zoning
      t.string :school_district
      t.string :heating
      t.string :cooling
      t.boolean :hud
      t.boolean :smoking

      t.timestamps null: false

      t.belongs_to :listing
    end
  end
end
