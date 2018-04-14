var PageTodoNew = Vue.component('page-todo-new', {
  data: function() {
    return {
      title:   null,
      text:    null,
      dueDate: null, //pickadate sets this to unix stamp
      dueTime: null, //pickadate sets this to number of minutes into the day
      error:   null
    }
  },
  methods: {
    submit: function(e) {
      console.log(this.title, this.text, this.dueDate, this.dueTime);
      var m = moment(this.dueDate).add(this.dueTime, 'minutes');
      console.log(m.format('YYYY-MM-DD HH:mm:ss'));
      e.preventDefault();
    },
    cancel: function(e) {
      router.push('list');
    },
  },
  mounted: function() {
    $('.datepicker').pickadate({
      onSet: function(context) {
        this.dueDate = context.select;
      }.bind(this)
    });
    $('.timepicker').pickatime({
      format: 'HH:i',
      onSet: function(context) {
        this.dueTime = context.select;
      }.bind(this)
    });
  },
  /*
  created: function() {
    this.$http.get('/todo_items/').then(function(res) {
      this.todoItems = res.body;
    }, function(res) {
      this.error = res.body.error + ' - ' + res.body.exception;
    });
  },
  */
  template: `
    <div>
      <h1>New Todo <img class="glyph" src="assets/images/file.png"></h1>

      <div v-if="error" class="alert alert-danger" role="alert">
        Error: {{ error }}
      </div>

      <form>
        <div class="form-group">
          <label for="todoTitle">Title</label>
          <input v-model="title" type="text" class="form-control" id="todoTitle" aria-describedby="todoTitleHelp" placeholder="Enter title">
          <small id="todoTitleHelp" class="form-text text-muted">What needs to be done?</small>
        </div>
        <div class="form-group">
          <label for="todoText">Text</label>
          <input v-model="text" type="text" class="form-control" id="todoText" aria-describedby="todoTextHelp" placeholder="Enter text">
          <small id="todoTextHelp" class="form-text text-muted">Further details (optional)</small>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="todoDueDate">Due Date</label>
            <input type="text" class="form-control datepicker" id="todoDueDate" placeholder="Enter due date">
          </div>
          <div class="form-group col-md-6">
            <label for="todoDueTime">Due Time</label>
            <input type="text" class="form-control timepicker" id="todoDueTime" placeholder="Enter due time">
          </div>
        </div>
        <button v-on:click="submit" type="submit" class="btn btn-primary">Submit</button>
        <button v-on:click="cancel" type="button" class="btn btn-secondary">Cancel</button>
      </form>
    </div>
    `
});
