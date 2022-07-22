class User < ApplicationRecord
  has_secure_password
  
  has_many :user_parks
  has_many :reviews
  has_one :bucket_list
  has_many :bucket_list_parks

  validates :username, uniqueness: true
end
