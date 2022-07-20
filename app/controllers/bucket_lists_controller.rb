class BucketListsController < ApplicationController
  
  # READ /bucketlists
  def index
    render json: BucketList.all, status: :ok
  end
  
end
