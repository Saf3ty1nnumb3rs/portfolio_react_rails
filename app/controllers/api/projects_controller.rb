class Api::ProjectsController < ApplicationController
    def index
        @projects = Project.all

        render json: {
            projects: @projects
        }
    end

    def show
        @project = Project.find(params[:id])
        @comments = @project.comments.order(id: :desc)

        render json: {
            project: @project,
            comments: @comments
        }
    end


    # CREATE NOT REQUIRED FOR PROJECT MODEL
    
    # UPDATE NOT REQUIRED FOR PROJECT MODEL
    
    # DESTROY NOT REQUIRED FOR PROJECT MODEL
end
