class CreateBucketListParks < ActiveRecord::Migration[7.0]
  def change
    create_table :bucket_list_parks do |t|
      t.integer :bucket_list_id
      t.integer :park_id

      t.timestamps
    end
  end
end
