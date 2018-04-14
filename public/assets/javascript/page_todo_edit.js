var PageTodoEdit = Vue.component('page-todo-edit', {
  data: function() {
    return {
      todoItem: null
    }
  },

  methods: {
    update: function(todoItem) {
      router.push('list');
    },
    cancel: function() {
      router.push('list');
    }
  },

  template: `
    <div>
      <h1>Edit Todo <img class="glyph" src="assets/images/file.png"></h1>

      <todo-form v-bind:todoItem="todoItem"
                 v-on:update="update($event)"
                 v-on:cancel="cancel($event)"></todo-form>
    </div>
    `
});
