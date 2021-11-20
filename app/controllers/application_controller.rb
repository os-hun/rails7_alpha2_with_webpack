class ApplicationController < ActionController::Base
  private
    def render_api_error(status, msg)
      @error = { status: status, message: msg }
      render 'api/error', format: :json, handlers: :jbuilder, status: :not_found
    end
end
