class Park < ApplicationRecord
  has_many :user_parks
  has_many :users, through: :user_parks
  has_many :reviews
  has_many :bucket_list_parks
  has_many :bucket_lists, through: :bucket_list_parks
end
