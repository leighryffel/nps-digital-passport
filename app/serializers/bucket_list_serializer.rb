class BucketListSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  has_many :bucketlistparks
end
