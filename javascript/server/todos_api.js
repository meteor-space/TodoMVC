
Space.messaging.Api.extend(TodoMVC, 'TodosApi', {

  dependencies: {
    todos: 'TodoMVC.Todos'
  },

  _allTodosCompleted: function() {
    return this.todos.find({ isCompleted: false }).count() === 0;
  },

  methods: function() {
    return [{
      'toggleAllTodos': function() {
        let toggleCompleted = {$set: {isCompleted: !this._allTodosCompleted()}};
        this.todos.update({}, toggleCompleted, {multi: true});
      },
      'clearCompletedTodos': function() {
        this.todos.remove({isCompleted: true});
      }
    }];
  }

});
