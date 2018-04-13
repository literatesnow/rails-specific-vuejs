class TodoItem < ApplicationRecord
  validates :title, presence: true, length: { minimum: 1 }
end
