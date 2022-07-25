class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :location, :image_url, :stamps_count, :bucket_count

  has_many :reviews
  has_many :bucket_list_parks
  has_many :user_parks
end
