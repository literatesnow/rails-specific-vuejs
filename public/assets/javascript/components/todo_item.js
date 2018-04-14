var TodoItem = Vue.component('todo-item', {
  props: ['title', 'text', 'completed', 'due_at', 'created_at'],
  filters: {
    moment_ago: function(date) {
      if (!date) {
        return '';
      }
      return moment(date).fromNow();
    }
  },
  template: `
    <section class="card">
      <div class="header">
        <h2>{{ title }}</h2>
      </div>
      <div class="text">{{ text }}</div>
      <div>{{ created_at | moment_ago }} {{ due_at | moment_ago }}</div>
      <div class="footer">
        <input type="checkbox" v-model="completed">
        <img class="delete" src="assets/images/delete.png" alt="Delete">
      </div>
    </section>
    `
});
