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
    {
      title: 'This Todo has a very long title and a rather long text element that you might not be able to read',
      text: %q{Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi est, pulvinar in finibus et, sagittis vitae nibh. Mauris gravida elit et libero facilisis porta. Donec interdum odio placerat neque molestie placerat. Phasellus quis convallis mauris. Etiam eget eleifend magna, at ullamcorper enim. Aliquam porttitor finibus odio a mollis. In hac habitasse platea dictumst. Integer libero massa, vestibulum at ullamcorper ut, molestie ut felis. Ut nec ultrices elit, quis suscipit quam. Sed sit amet elementum tellus. Curabitur non ipsum in ipsum eleifend aliquet vel vitae libero. Proin interdum, odio sit amet auctor gravida, nibh felis commodo arcu, non maximus turpis dolor sed massa. Vestibulum lorem justo, aliquam ut pellentesque id, elementum ultricies mi. Nam eget arcu nec tellus posuere semper vitae eget augue.

Aenean placerat ante luctus nulla iaculis bibendum. Fusce eu efficitur orci. Donec lobortis elit in mi ullamcorper porttitor. Suspendisse vitae ex enim. Duis pretium egestas venenatis. Nulla feugiat semper felis. Sed ut sem lacinia, eleifend turpis a, dapibus felis. Pellentesque tincidunt neque eget augue placerat porta.

Phasellus vel malesuada enim, id elementum nisi. Curabitur placerat ipsum nibh, vel vulputate sapien dictum eu. Maecenas egestas nibh purus, eget sollicitudin velit accumsan ut. Praesent id dolor eget tellus lobortis sodales non tincidunt ligula. Cras nisi elit, condimentum dictum euismod at, varius quis arcu. Cras a posuere purus. Vestibulum urna lectus, aliquet vel justo vitae, mattis dignissim lorem.

Mauris a hendrerit mauris. Vestibulum auctor ipsum quis velit varius, ut interdum mauris fermentum. Donec orci nulla, accumsan nec mi at, mattis egestas urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse volutpat blandit porttitor. Cras mattis gravida accumsan. Ut vestibulum iaculis aliquam. Nam ut turpis ultricies, aliquam tellus vel, efficitur nisi. Nulla vestibulum dignissim urna sed hendrerit. Proin vehicula eu arcu sed iaculis. In sem enim, congue a sodales sit amet, suscipit gravida eros.

Vivamus sit amet urna ut elit scelerisque aliquam. Integer imperdiet consequat nibh, id vestibulum ligula ornare eu. Quisque convallis ipsum ut eros auctor, sit amet ultrices lectus rhoncus. Proin accumsan fringilla metus, eu aliquet elit feugiat vel. Mauris malesuada tellus id dui vestibulum, eu interdum leo mollis. Vivamus consequat odio eget magna auctor iaculis. Etiam euismod efficitur dui, quis faucibus lacus placerat at. Sed tempus metus in quam pharetra, id pharetra leo bibendum.},
      completed: true
    }
  ])
