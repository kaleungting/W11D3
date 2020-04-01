class Api::SessionsController < ApplicationController

    def new
        render :new
    end
    
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            render json: "Successfully logged in."
        else
            # flash[:errors] = ["invalid credentials"], status: 422
            render json: ['Nope. Wrong credentials!'], status: 401
        end

    end

    def destroy
        logout!
        render json: { message: 'Logout successful.' }
    end
end

#  def destroy
#         logout if logged_in?
#         redirect_to new_session_url
#     end