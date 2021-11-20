class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def create
    @user = User.new(set_params)
    @user.username = SecureRandom.hex(10)

    if @user.save
      render 'show', format: 'json', handlers: 'jbuilder'
    else
      render json: { message: @user.errors.full_messages.join(', ') }
    end
  end

  def show
    format: 'json', handlers: 'jbuilder'
  end

  private
    def set_user
      @user = User.find_by(username: params[:username])
    end

    def set_params
      params.require(:user).permit(:name, :email, :password, :username)
    end
end
