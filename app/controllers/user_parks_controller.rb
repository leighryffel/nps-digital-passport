class UserParksController < ApplicationController

  # READ /user_parks
  def index
    render json: UserPark.all, status: :ok
  end
  
  # POST /user_parks
  def create
    user_park = UserPark.create!(user_park_params)
    render json: user_park, status: :created
  end

  # DELETE /user_parks/:id
  def destroy
    user_park = UserPark.find(params[:id])
    user_park.destroy
    head :no_content
  end

  private
  
  def user_park_params
    params.permit(:user_id, :park_id)
  end

end
