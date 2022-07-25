class User < ApplicationRecord
  has_secure_password
  
  has_many :user_parks
  has_many :reviews
  has_many :bucket_list_parks

  validates :username, uniqueness: true

  def bucket_count
    return self.bucket_list_parks.count
  end

  def stamps_count
    return self.user_parks.count
  end

end
