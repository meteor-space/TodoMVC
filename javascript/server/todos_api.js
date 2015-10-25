
Space.messaging.Api.extend(TodoMVC, 'TodosApi', {

  Dependencies: {
    todos: 'TodoMVC.Todos'
  },

  _allTodosCompleted: function() {
    return this.todos.find({ isCompleted: false }).count() === 0;
  },

  methods: function() {
    return [
      {
        'toggleAllTodos': function () {
          var toggleCompleted = {$set: {isCompleted: !this._allTodosCompleted()}};
          this.todos.update({}, toggleCompleted, {multi: true});
        }
      }, {
        'clearCompletedTodos': function () {
          this.todos.remove({isCompleted: true});
        }
      }
    ];
  }

});
