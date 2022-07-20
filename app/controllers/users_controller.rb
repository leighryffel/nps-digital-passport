class UsersController < ApplicationController

  # READ /users
  def index
    render json: User.all, status: :ok
  end
  
end
