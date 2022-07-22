class CreateBucketListParks < ActiveRecord::Migration[7.0]
  def change
    create_table :bucket_list_parks, id: false do |t|
      t.string :id, null: false, primary_key: true
      t.integer :bucket_list_id
      t.string :name
      t.string :latitude
      t.string :longitude
      t.text :activities
      t.string :states
      t.string :designation
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
