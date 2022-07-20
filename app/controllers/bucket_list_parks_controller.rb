class BucketListParksController < ApplicationController

  # READ /bucketlistparks
  def index
    render json: BucketListPark.all, status: :ok
  end
  
end
