
class TodoMVC.TodoList extends Space.flux.BlazeComponent

  # Register blaze-component for template
  @register 'todo_list'

  dependencies: {
    store: 'TodoMVC.TodosStore'
    meteor: 'Meteor'
  }

  allTodos: -> @store.filteredTodos()

  hasAnyTodos: -> @store.filteredTodos().count() > 0

  allTodosCompleted: -> @store.activeTodos().count() is 0

  isToggleChecked: ->
    if @hasAnyTodos() && @allTodosCompleted() then 'checked' else false

  prepareTodoData: ->
    todo = @currentData()
    todo.isEditing = @store.editingTodoId() is todo._id
    return todo

  events: -> [{
    'toggled .todo': @toggleTodo
    'destroyed .todo': @deleteTodo
    'doubleClicked .todo': @editTodo
    'editingCanceled .todo': @stopEditing
    'editingCompleted .todo': @submitNewTitle
    'click #toggle-all': @toggleAllTodos
  }]

  toggleTodo: -> @publish new TodoMVC.TodoToggled {
    todoId: @currentData()._id
  }

  deleteTodo: -> @publish new TodoMVC.TodoDeleted {
    todoId: @currentData()._id
  }

  editTodo: -> @publish new TodoMVC.TodoEditingStarted {
    todoId: @currentData()._id
  }

  submitNewTitle: (event) ->
    todo = Space.flux.getEventTarget(event)
    newTitle = todo.getTitleValue()
    @publish new TodoMVC.TodoTitleChanged {
      todoId: todo.data._id,
      newTitle: newTitle
    }
    @stopEditing()

  toggleAllTodos: -> @meteor.call 'toggleAllTodos'

  stopEditing: -> @publish new TodoMVC.TodoEditingEnded {
    todoId: @currentData()._id
  }
