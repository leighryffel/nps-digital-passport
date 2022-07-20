class User < ApplicationRecord
  has_many :user_parks
  has_many :parks
  has_one :bucket_list
  has_many :bucket_list_parks
  has_many :reviews
end
