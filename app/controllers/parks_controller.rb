class ParksController < ApplicationController

  # READ /parks
  def index
    render json: Park.all, status: :ok
  end
  
end
