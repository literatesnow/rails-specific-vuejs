/**
 * PageTodoList
 *
 * Page which lists all the todo items as cards.
 */
var PageTodoList = Vue.component('page-todo-list', {
  data: function() {
    return {
      loaded: false,
      errorMessage: null,
      todoItems: []
    }
  },

  created: function() {
    this.$http.get('/todo_items/').then(function(res) {
      this.todoItems = res.body;
      this.loaded = true;
    }, function(res) {
      this.errorMessage = new ErrorResponse(res.body).toString();
      this.loaded = true;
    });
  },

  mounted: function() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  },

  template: `
    <div>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>

      <div v-if="!loaded" class="loading">
        <img src="assets/images/gear.png" class="spinning">
      </div>

      <div v-if="loaded && !todoItems.length && !errorMessage" class="alert alert-info" role="alert">
        Create a <router-link :to="{ name: 'new' }">new todo</router-link> and start getting stuff done!
      </div>

      <div class="row">
        <todo-card v-for="item in todoItems"
                   v-bind:id="item.id"
                   v-bind:title="item.title"
                   v-bind:text="item.text"
                   v-bind:completed="item.completed"
                   v-bind:due_at="item.due_at"
                   v-bind:created_at="item.created_at"
                   v-bind:key="item.id"></todo-card>
      </div>
    </div>
    `
});
