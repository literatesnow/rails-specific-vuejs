var PageTodoEdit = Vue.component('page-todo-edit', {
  methods: {
    update: function(todoItem) {
      router.push({ name: 'list' });
    },
    cancel: function() {
      router.push({ name: 'list' });
    }
  },

  template: `
    <div>
      <h1>Edit Todo <img class="glyph" src="assets/images/file.png"></h1>

      <todo-form v-bind:todoId="this.$route.params.id"
                 v-on:update="update($event)"
                 v-on:cancel="cancel($event)"></todo-form>
    </div>
    `
});
