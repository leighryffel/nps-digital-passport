class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :park_id
  belongs_to :park
end
