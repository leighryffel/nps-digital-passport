class ReviewsController < ApplicationController

  # READ /reviews
  def index
    render json: Review.all, status: :ok
  end
  
end
