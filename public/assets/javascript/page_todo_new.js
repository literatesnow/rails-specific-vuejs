var PageTodoNew = Vue.component('page-todo-new', {
  methods: {
    redirectToList: function() {
      router.push({ name: 'list' });
    }
  },

  template: `
    <div>
      <h1>New Todo</h1>

      <todo-form v-on:createTodo="redirectToList($event)"
                 v-on:cancelTodo="redirectToList($event)"></todo-form>
    </div>
    `
});
