
class TodoMVC.TodosApi extends Space.messaging.Api

  dependencies: {
    todos: 'TodoMVC.Todos'
  }

  methods: -> [
    'toggleAllTodos': -> @todos.update {}, {$set: isCompleted: !@_allTodosCompleted()}, multi: true
    'clearCompletedTodos': -> @todos.remove isCompleted: true
  ]

  _allTodosCompleted: -> @todos.find(isCompleted: false).count() is 0
