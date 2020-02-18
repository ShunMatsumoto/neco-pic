class PostsController < ApplicationController
  def index
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

  private

  def post_params
    params.require(:post).permit(:title, :description, :image).merge(user_id: current_user.id)
  end
end
