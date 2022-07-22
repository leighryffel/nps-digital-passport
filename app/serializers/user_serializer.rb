class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :location, :image_url
  has_many :reviews
  has_one :bucket_list
  has_many :user_parks
end
