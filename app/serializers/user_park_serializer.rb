class UserParkSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :park
end
