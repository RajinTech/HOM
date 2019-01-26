class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :street, null: false
      t.string :unit
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :bedrooms, null: false
      t.string :bathrooms, null: false
      t.string :rent, null: false
      t.string :date_available, null: false
      t.string :lease_length, null: false
      t.string :sq_ft, null: false

      t.timestamps null: false
      t.belongs_to :user
    end
  end
end
