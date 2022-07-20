class BucketList < ApplicationRecord
  belongs_to :user
  has_many :bucket_list_parks
  has_many :parks, through: :bucket_list_parks
end
