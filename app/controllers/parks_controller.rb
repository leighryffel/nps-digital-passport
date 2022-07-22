class ParksController < ApplicationController

  # READ /parks
  def index
    render json: Park.all, status: :ok
  end

  # POST /parks
  def create
    park = Park.create!(park_params)
    render json: park, status: :created
  end
  
  private
  
  def park_params
    params.permit(:name, :latitude, :longitude, :activities, :states, :designation, :description, :image_url, :id)
  end
  
end
