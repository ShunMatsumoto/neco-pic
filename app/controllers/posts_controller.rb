class PostsController < ApplicationController

  # before_action :post_params

  def index
    @posts = Post.order("created_at DESC")
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path, notice: "最高の癒しを投稿しました"
    else
      render :new
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  # def destroy
  #   @user = User.find(params[:id]) 
  #   post = Post.find(params[:id])
  #   if post.user_id == current_user.id && @post.destroy
  #     redirect_to user_path(@user), notice: '投稿が削除されました'
  #   else
  #     redirect_to root_path
  #   end
  # end

  private

  def post_params
    params.require(:post).permit(:title, :description, :image).merge(user_id: current_user.id)
  end

  # def set_user
  #   @user = User.find(params[:user_id])
  # end
end
