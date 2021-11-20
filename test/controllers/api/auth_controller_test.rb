require "test_helper"

class Api::AuthControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_auth_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_auth_destroy_url
    assert_response :success
  end
end
