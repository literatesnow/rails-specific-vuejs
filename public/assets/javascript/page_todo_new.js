var PageTodoNew = Vue.component('page-todo-new', {
  methods: {
    create: function(todoItem) {
      router.push({ name: 'list' });
    },
    cancel: function() {
      router.push({ name: 'list' });
    }
  },

  template: `
    <div>
      <h1>New Todo <img class="glyph" src="assets/images/file.png"></h1>

      <todo-form v-on:create="create($event)"
                 v-on:cancel="cancel($event)"></todo-form>
    </div>
    `
});
