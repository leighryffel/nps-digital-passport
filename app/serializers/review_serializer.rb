class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :park_id, :text
  belongs_to :park
end
