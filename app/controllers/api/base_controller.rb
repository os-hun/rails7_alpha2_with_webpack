class Api::BaseController < ApplicationController
  include Api::BaseHelper
  include Api::AuthHelper

  private
    def render_error(status, message = nil)
      _set_error(status, message)
      render 'api/error', format: :json, handlers: :jbuilder, status: status
    end
end
