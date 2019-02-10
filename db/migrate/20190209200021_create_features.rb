class CreateFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :features do |t|
      t.string :bedrooms, null:false, default: ""
      t.string :bathrooms, null: false, default: ""
      t.string :rent, null: false, default: ""
      t.string :date_available, null: false, default: ""
      t.string :lease_length, null: false, default: ""
      t.integer :sq_ft

      t.timestamps null: false
      t.belongs_to :listing
    end
  end
end
