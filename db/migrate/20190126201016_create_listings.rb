class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :street, null: false
      t.string :unit, null: false, default:""
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps null: false
      t.belongs_to :user
    end
  end
end
