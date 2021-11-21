module Api::BaseHelper
  def _set_error(status, message = nil)
    error_info = _find_error(status)

    @error = {
      status: error_info[:status],
      message: message.nil? ? error_info[:message] : message
    }
  end

  def _find_error(status)
    [
      { status: :bad_request, message: 'Bad request.' },
      { status: :not_found, message: 'Not found.' },
    ].find { |e| e[:status] == status }
  end
end
