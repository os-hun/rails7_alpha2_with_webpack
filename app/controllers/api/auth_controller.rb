class Api::AuthController < Api::BaseController
  def create
    user = User.find_by(email: params[:auth][:email].downcase)

    if user && user.authenticate(params[:auth][:password])
      log_in user
      @message = 'Welcome back!!'
      render format: :json, handlers: :jbuilder
    else
      render_error :bad_request, 'Invalid email/password combination.'
    end
  end

  def destroy
    if is_logged_in?
      log_out
      @message = 'Logged out.'
      render format: :json, handlers: :jbuilder
    end
  end
end
