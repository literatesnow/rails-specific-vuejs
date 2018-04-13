require 'test_helper'

class TodoItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @todo_item = todo_items(:one)
  end

  test "should get index" do
    get todo_items_url, as: :json
    assert_response :success
  end

  test "should create todo_item" do
    assert_difference('TodoItem.count') do
      post todo_items_url, params: { todo_item: { completed: @todo_item.completed, due_at: @todo_item.due_at, text: @todo_item.text, title: @todo_item.title } }, as: :json
    end

    assert_response 201
  end

  test "should show todo_item" do
    get todo_item_url(@todo_item), as: :json
    assert_response :success
  end

  test "should update todo_item" do
    patch todo_item_url(@todo_item), params: { todo_item: { completed: @todo_item.completed, due_at: @todo_item.due_at, text: @todo_item.text, title: @todo_item.title } }, as: :json
    assert_response 200
  end

  test "should destroy todo_item" do
    assert_difference('TodoItem.count', -1) do
      delete todo_item_url(@todo_item), as: :json
    end

    assert_response 204
  end
end
