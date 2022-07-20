class BucketListParksController < ApplicationController

  # READ /bucket_list_parks
  def index
    render json: BucketListPark.all, status: :ok
  end

  # POST /bucket_list_parks
  def create
    bucket_list_park = BucketListPark.create!(bucket_list_park_params)
    render json: bucket_list_park, status: :created
  end

  # DELETE /bucket_list_parks/:id
  def destroy
    bucket_list_park = BucketListPark.find(params[:id])
    bucket_list_park.destroy
    head :no_content
  end
  
  private
  
  def bucket_list_park_params
    params.permit(:bucket_list_id, :park_id)
  end
  
end
