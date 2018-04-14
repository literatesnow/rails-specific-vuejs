var TodoForm = Vue.component('todo-form', {
  data: function() {
    return {
      formItem: {
        id:           null,
        title:        null,
        text:         null,
        dueDate:      null, //pickadate sets this to unix stamp
        dueTime:      null, //pickadate sets this to number of minutes into the day
      },

      titleError: null,
      errorMessage: null
    }
  },

  props: ['todoItem'],

  methods: {
    hasId: function() {
      return this.todoItem && this.todoItem.id !== undefined;
    },

    buttonDefaults: function(e) {
      e.preventDefault();

      this.errorMessage = null;
      this.titleError   = null;
    },

    createTodo: function(e) {
      this.buttonDefaults(e);

      var todoItem = this.toToDoItem();

      console.log('create', todoItem);

      this.$http.post('/todo_items', todoItem).then(function(res) {
        console.log('parp', res);
        this.$emit('create', todoItem);
      }, function(res) {
        console.log('moo', res);
        if (res.body.title && res.body.title.length) {
          this.titleError = res.body.title.join(', ');
        } else {
          this.errorMessage = new ErrorResponse(res.body).toString();
        }
      });
    },

    updateTodo: function(e) {
      this.buttonDefaults(e);

      console.log('update...');
    },

    toToDoItem: function() {
      var todoItem = {
        title:     this.formItem.title,
        text:      this.formItem.text,
        due_at:    this.dueAtFromForm(),
        //completed: this.formItem.componentfalse
      };

      return todoItem;
    },

    cancel: function() {
      this.$emit('cancel');
    },

    datePickerSelect: function(context) {
      if (context.select !== undefined) {
        return context.select;
      } else {
        return null;
      }
    },

    dueAtFromForm: function() {
      var dueAt = null;

      if (this.formItem.dueDate !== null) {
        dueAt = moment(this.formItem.dueDate);
      }

      if (this.formItem.dueTime !== null) {
        //use today if user didn't specify date
        if (dueAt === null) {
          dueAt = moment().startOf('day');
        }
        dueAt.add(this.formItem.dueTime, 'minutes')
      }

      if (dueAt !== null) {
        return dueAt.toDate();
      }

      return null;
    }
  },

  mounted: function() {
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
      <form>
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>

        <div class="form-group">
          <label for="todoTitle">Title <span v-if="titleError" class="badge badge-danger">{{ titleError }}</span></label>
          <input v-model="formItem.title" type="text" class="form-control" id="todoTitle" aria-describedby="todoTitleHelp" placeholder="Enter title">
          <small id="todoTitleHelp" class="form-text text-muted">What needs to be done?</small>
        </div>
        <div class="form-group">
          <label for="todoText">Text</label>
          <textarea v-model="formItem.text" type="text" class="form-control" id="todoText" aria-describedby="todoTextHelp" placeholder="Enter text" rows="6"></textarea>
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

        <button v-if="!hasId()" v-on:click="createTodo" type="submit" class="btn btn-primary">Create</button>
        <button v-if="hasId()" v-on:click="updateTodo" type="submit" class="btn btn-primary">Update</button>
        <button v-on:click="cancel" type="button" class="btn btn-secondary">Cancel</button>
      </form>
    `
});