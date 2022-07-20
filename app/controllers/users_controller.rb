class UsersController < ApplicationController

  # READ /users
  def index
    render json: User.all, status: :ok
  end
  
  # POST /users
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  # PATCH /users/:id
  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  private

  def user_params
    params.permit(:username, :password_digest, :location, :image_url)
  end

end
