class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      # change this to be a string
      t.integer :park_id
      t.integer :user_id
      t.text :text

      t.timestamps
    end
  end
end
