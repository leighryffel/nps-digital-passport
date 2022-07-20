class BucketListsController < ApplicationController
  
  # READ /bucket_lists
  def index
    render json: BucketList.all, status: :ok
  end

  # POST /bucket_lists
  def create
    bucket_list = BucketList.create!(bucket_list_params)
    render json: bucket_list, status: :created
  end

  # DELETE /bucket_lists/:id
  def destroy
    bucket_list = BucketList.find(params[:id])
    bucket_list.destroy
    head :no_content
  end
  
  private
  
  def bucket_list_params
    params.permit(:user_id)
  end

end
