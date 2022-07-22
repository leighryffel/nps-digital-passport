class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_park_id, :text
  belongs_to :user_park
end
