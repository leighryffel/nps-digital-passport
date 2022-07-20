class BucketListPark < ApplicationRecord
  belongs_to :bucket_list
  belongs_to :park
end
