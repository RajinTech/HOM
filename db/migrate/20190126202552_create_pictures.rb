class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :image

      t.belongs_to :listing

      t.timestamps null: false

    end
  end
end
