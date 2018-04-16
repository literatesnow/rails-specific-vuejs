var PageTodoEdit = Vue.component('page-todo-edit', {
  methods: {
    redirectToList: function() {
      router.push({ name: 'list' });
    }
  },

  template: `
    <div>
      <h1>Edit Todo</h1>

      <todo-form v-bind:todoId="this.$route.params.id"
                 v-on:updateTodo="redirectToList($event)"
                 v-on:cancelTodo="redirectToList($event)"
                 v-on:deleteTodo="redirectToList($event)"></todo-form>
    </div>
    `
});
