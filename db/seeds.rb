# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TodoItem.create(
  [
    {
      title: 'Book',
      text: 'Read the book.'
    },
    {
      title: 'Dishes',
      text: 'Clean up.',
      due_at: '2018-04-12 21:30:00'
    },
    {
      title: 'Shopping',
      text: 'Go shopping.'
    },
    {
      title: 'Code',
      text: 'Create a todo list app.',
      due_at: '2018-04-16 08:00:00'
    },
    {
      title: 'Walk',
      text: 'Get outside.',
      completed: true
    },
  ])
