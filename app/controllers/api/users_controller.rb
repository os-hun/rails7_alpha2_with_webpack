class Api::UsersController < ApplicationController
  include Api::AuthHelper

  before_action :set_user, only: [:show]

  def create
    @user = User.new(set_params)
    @user.username = SecureRandom.hex(10)

    if @user.save
      log_in @user
      render 'show', format: :json, handlers: :jbuilder
    else
      render_api_error(:bad_request, @user.errors.full_messages.join(', '))
    end
  end

  def show
    render format: :json, handlers: :jbuilder
  end

  private
    def set_user
      @user = User.find_by(username: params[:username])

      if !@user
        render_api_error(:not_found, 'Not Found.')
      end
    end

    def set_params
      params.require(:user).permit(:name, :email, :password, :username)
    end
end
