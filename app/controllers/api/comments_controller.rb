class Api::CommentsController < ApplicationController
    before_action :def_comment, only: [:show, :destroy]

    def index
        @comments = Project.find(params[:project_id]).comments.order(id: :desc)
        render json: @comments
    end

    def create
        @project = Project.find(params[:project_id])
        @comment = @project.comments.create!(comment_params)

        render json: {
            comment: @comment
        }
    end

    def destroy 
        @comment.destroy
    end





    private

    def def_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.require(:comment).permit(:name, :comment, :project_id)
    end

end
