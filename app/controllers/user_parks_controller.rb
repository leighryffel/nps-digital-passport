class UserParksController < ApplicationController

  # READ /userparks
  def index
    render json: UserPark.all, status: :ok
  end
  
end
