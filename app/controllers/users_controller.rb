class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    # add delete account feature?

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: [error: user.errors.full_messages], status: :unprocessable_entity
        end
    end

    def show
        user = User.find(params[:user_id])
        render json: user, status: :ok
    end

    private

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:email, :password, :password_confirmation, :username)
    end
end
