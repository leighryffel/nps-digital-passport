class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude, :activities, :states, :designation, :description, :image_url
  has_many :reviews
end
