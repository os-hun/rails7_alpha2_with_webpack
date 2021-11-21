class MainController < ApplicationController
  include Api::AuthHelper

  before_action :redirect_to_auth_page, only: [:private]

  def index
  end

  def private
    render 'index'
  end

  private
    def redirect_to_auth_page
      if !is_logged_in?
        flash[:error] = 'ログインしてください。'
        redirect_to log_in_path
      end
    end
end
