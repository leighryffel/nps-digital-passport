class BucketListSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  has_many :bucket_list_parks
end
