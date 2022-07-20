class CreateParks < ActiveRecord::Migration[7.0]
  def change
    create_table :parks do |t|
      t.string :name
      t.string :latitude
      t.string :longitude
      t.string :activities
      t.string :states
      t.string :designation
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
