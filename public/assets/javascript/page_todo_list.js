var PageTodoList = Vue.component('page-todo-list', {
  data: function() {
    return {
      error: null,
      todoItems: []
    }
  },
  created: function() {
    this.$http.get('/todo_items/').then(function(res) {
      this.todoItems = res.body;
    }, function(res) {
      this.error = res.body.error + ' - ' + res.body.exception;
    });
  },
  template: `
    <div>
      <div v-if="error" class="alert alert-danger" role="alert">
        Error: {{ error }}
      </div>

      <div v-if="!todoItems.length && !error" class="alert alert-info" role="alert">
        Create a <router-link to="/new">new todo</router-link> and start getting stuff done!
      </div>

      <div class="card-container">
        <todo-item v-for="item in todoItems"
                   v-bind:title="item.title"
                   v-bind:text="item.text"
                   v-bind:completed="item.completed"
                   v-bind:due_at="item.due_at"
                   v-bind:created_at="item.created_at"
                   v-bind:key="item.id"></todo-item>
      </div>
    </div>
    `
});
