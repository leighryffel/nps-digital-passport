class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_park_id, :text, :created_at
  belongs_to :user_park
end
