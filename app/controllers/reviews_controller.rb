class ReviewsController < ApplicationController

  # READ /reviews
  def index
    render json: Review.all, status: :ok
  end

  # READ /reviews/:id
  def show
    review = Review.find(params[:id])
    render json: review, status: :ok
  end
  
  # POST /reviews
  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  # PATCH /reviews/:id
  def update
    review = Review.find(params[:id])
    review.update(review_params)
    render json: review
  end

  # DELETE /reviews/:id
  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private
  
  def review_params
    params.permit(:text, :user_id, :park_id)
  end

end
