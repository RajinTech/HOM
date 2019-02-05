class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.string :building_style, null: false
      t.integer :parking_spaces, null: false
      t.boolean :pets
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
