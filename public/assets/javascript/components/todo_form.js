/**
 * TodoForm
 *
 * Form for creating or updating a todo item.
 */
var TodoForm = Vue.component('todo-form', {
  props: ['todoId'],

  data: function() {
    return {
      formItem: {
        id:           null,
        title:        null,
        text:         null,
        dueDate:      null, //pickadate sets this to unix stamp
        dueTime:      null, //pickadate sets this to number of minutes into the day
        completed:    null,
      },

      loaded:       false,
      titleError:   null,
      errorMessage: null
    }
  },

  computed: {
    dueAtDate: function() {
      var dueAt = null;

      if (this.formItem.dueDate !== null) {
        dueAt = moment(this.formItem.dueDate);
      }

      if (this.formItem.dueTime !== null) {
        //use today if user didn't specify date
        if (dueAt === null) {
          dueAt = moment();
        }
        dueAt.startOf('day').add(this.formItem.dueTime, 'minutes')
      }

      return dueAt;
    },

    isOverdue: function() {
      var dueAt = this.dueAtDate;
      if (dueAt === null) {
        return false;
      }

      return dueAt.isBefore(moment(), 'second');
    },
  },

  methods: {
    hasId: function() {
      return this.todoId !== undefined &&
             this.todoId !== null;
    },

    clearErrors: function() {
      this.errorMessage = null;
      this.titleError   = null;
    },

    getTodo: function() {
      this.$http.get('/todo_items/' + encodeURIComponent(this.todoId)).then(function(res) {
        this.fromToDoItem(res.body);
        this.loaded = true;
      }, function(res) {
        this.errorMessage = new ErrorResponse(res.body).toString();
        this.loaded = true;
      });
    },

    createTodo: function(e) {
      this.clearErrors();

      var todoItem = this.toToDoItem();

      this.$http.post('/todo_items', todoItem).then(function(res) {
        this.$emit('createTodo', todoItem);
      }, function(res) {
        this.handleXhrError(res);
      });
    },

    updateTodo: function(e) {
      this.clearErrors();

      var todoItem = this.toToDoItem();
      var uri      = '/todo_items/' + encodeURIComponent(this.todoId);

      this.$http.put(uri, todoItem).then(function(res) {
        this.$emit('updateTodo', todoItem);
      }, function(res) {
        this.handleXhrError(res);
      });
    },

    deleteTodo: function(e) {
      this.clearErrors();

      if (!confirm('Are you sure?')) {
        this.$emit('buttonReset');
        return;
      }

      var uri = '/todo_items/' + encodeURIComponent(this.todoId);

      this.$http.delete(uri).then(function(res) {
        this.$emit('deleteTodo', this.todoId);
      }, function(res) {
        this.handleXhrError(res);
      });
    },

    toToDoItem: function() {
      var dueAt = this.dueAtDate;

      var todoItem = {
        title:     this.formItem.title,
        text:      this.formItem.text,
        due_at:    (dueAt) ? dueAt.format() : null,
        completed: this.formItem.completed
      };

      return todoItem;
    },

    fromToDoItem: function(todoItem) {
      this.formItem.title     = todoItem.title;
      this.formItem.text      = todoItem.text;
      this.formItem.completed = todoItem.completed;

      if (todoItem.due_at) {
        var dueAt = moment(todoItem.due_at);
        $('.datepicker').pickadate('set', { select: dueAt.toDate() });
        $('.timepicker').pickatime('set', { select: (dueAt.hours() * 60) + dueAt.minutes() });
      }
    },

    cancel: function() {
      this.$emit('cancelTodo');
    },

    datePickerSelect: function(context) {
      if (context.select !== undefined) {
        return context.select;
      } else {
        return null;
      }
    },

    handleXhrError: function(res) {
      this.$emit('buttonReset');

      if (res.body.title && res.body.title.length) {
        this.titleError = res.body.title.join(', ');
      } else {
        this.errorMessage = new ErrorResponse(res.body).toString();
      }
    },
  },

  mounted: function() {
    if (this.hasId()) {
      this.getTodo();
    } else {
      this.loaded = true;
    }

    $('.datepicker').pickadate({
      onSet: function(context) {
        this.formItem.dueDate = this.datePickerSelect(context);
      }.bind(this)
    });

    $('.timepicker').pickatime({
      format: 'HH:i',
      onSet: function(context) {
        this.formItem.dueTime = this.datePickerSelect(context);
      }.bind(this)
    });
  },

  template: `
      <div>
        <div v-if="!loaded" class="loading">
          <img src="assets/images/gear.png" class="spinning">
        </div>

        <form v-show="loaded">
          <div class="form-group">
            <label for="todoTitle">Title <span v-if="titleError" class="badge badge-danger">{{ titleError }}</span></label>
            <input v-model="formItem.title" type="text" class="form-control" id="todoTitle" aria-describedby="todoTitleHelp" placeholder="Enter title">
            <small id="todoTitleHelp" class="form-text text-muted">What needs to be done?</small>
          </div>
          <div class="form-group">
            <label for="todoText">Text</label>
            <textarea v-model="formItem.text" type="text" class="form-control" id="todoText" aria-describedby="todoTextHelp" placeholder="Enter text" rows="6"></textarea>
            <small id="todoTextHelp" class="form-text text-muted">Further details</small>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="todoDueDate">Due Date <span v-if="this.isOverdue" class="badge badge-danger">Overdue</span></label>
              <input type="text" class="form-control datepicker" id="todoDueDate" placeholder="Enter due date">
            </div>
            <div class="form-group col-md-6">
              <label for="todoDueTime">Due Time</label>
              <input type="text" class="form-control timepicker" id="todoDueTime" placeholder="Enter due time">
            </div>
          </div>

          <div v-if="hasId()" class="form-group">
            <div class="form-check">
              <input v-model="formItem.completed" class="form-check-input" type="checkbox" value="" id="todoCompleted">
              <label class="form-check-label" for="todoCompleted">
                Completed
              </label>
            </div>
          </div>

          <div class="form-group">
            <todo-form-button v-if="!hasId()" v-on:buttonClick="createTodo" label="Create" class="btn btn-primary" />
            <todo-form-button v-if="hasId()" v-on:buttonClick="updateTodo" label="Update" class="btn btn-primary" />
            <todo-form-button v-if="hasId()" v-on:buttonClick="deleteTodo" label="Delete" class="btn btn-danger" />
            <todo-form-button v-on:buttonClick="cancel($event)" label="Cancel" class="btn btn-secondary" />
          </div>

          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    `
});
