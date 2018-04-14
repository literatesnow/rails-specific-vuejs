var TodoCard = Vue.component('todo-card', {
  props: ['id', 'title', 'text', 'completed', 'due_at', 'created_at'],

  methods: {
    infoText: function() {
      var strings = [];

      if (this.due_at) {
        strings.push('Due: ' + moment(this.due_at).fromNow());
      }
      if (this.created_at) {
        strings.push('Created: ' + moment(this.created_at).fromNow());
      }

      return strings.join(', ');
    }
  },

  template: `
    <div class="col-sm-3">
      <div class="card border-dark mb-3">
        <div class="card-header">{{ title }}</div>
        <div class="card-body">
          <p class="card-text">{{ text }}</p>
        </div>
        <div class="card-footer text-muted">
          <span data-toggle="tooltip" data-placement="top" :title="infoText()">Info</span>
          &bull;
          <router-link :to="{ name: 'edit', params: { id: this.id } }">Edit</router-link>
          &bull;
          Delete
        </div>
      </div>
    </div>
    `
});

/*
    <div class="card">
      <div class="header">
        <h2>{{ title }}</h2>
      </div>
      <div class="text">{{ text }}</div>
      <div>{{ created_at | moment_ago }} {{ due_at | moment_ago }}</div>
      <div class="footer">
        <input type="checkbox" v-model="completed">
        <img class="delete" src="assets/images/delete.png" alt="Delete">
      </div>
    </section>
    */
