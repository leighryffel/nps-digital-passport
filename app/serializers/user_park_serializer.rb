class UserParkSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :latitude, :longitude, :activities, :states, :designation, :description, :image_url
  belongs_to :user
end
