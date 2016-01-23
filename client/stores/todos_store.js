
Space.flux.Store.extend(TodoMVC, 'TodosStore', {

  // The store needs a reference to the todos collection
  dependencies: {
    todos: 'TodoMVC.Todos'
  },

  // TodoMVC example specific properties
  FILTERS: {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
  },

  _session: 'TodoMVC.TodosStoreSession',

  // ====== Public reactive data accessors ======= //

  // These methods can be used by other parts of the system to
  // fetch reactive data and auto-update when store data changes.

  reactiveVars() {
    return [{
      activeFilter: this.FILTERS.ALL
    }];
  },

  sessionVars() {
    return [{
      editingTodoId: null
    }];
  },

  filteredTodos() {
    switch (this.activeFilter()) {
    case this.FILTERS.ALL: return this.todos.find();
    case this.FILTERS.ACTIVE: return this.todos.find({ isCompleted: false});
    case this.FILTERS.COMPLETED: return this.todos.find({ isCompleted: true });
    default: this.todos.find();
    }
  },

  completedTodos() {
    return this.todos.findCompletedTodos();
  },

  activeTodos() {
    return this.todos.findActiveTodos();
  },

  // ====== Event handling setup ====== //

  // Map private methods to events coming from the outside
  // this is the only way state can change within the store.

  eventSubscriptions() {
    return [{
      'TodoMVC.TodoCreated': this._insertNewTodo,
      'TodoMVC.TodoDeleted': this._removeTodo,
      'TodoMVC.TodoEditingStarted': this._setEditingTodoId,
      'TodoMVC.TodoEditingEnded': this._unsetEditingTodoId,
      'TodoMVC.TodoTitleChanged': this._updateTodoTitle,
      'TodoMVC.TodoToggled': this._toggleTodo,
      'TodoMVC.FilterChanged': this._changeActiveFilter
    }];
  },

  _insertNewTodo(event) {
    this.todos.insert({
      title: event.title,
      isCompleted: false
    });
  },

  _removeTodo(event) {
    this.todos.remove(event.todoId);
  },

  _setEditingTodoId(event) {
    this._setSessionVar('editingTodoId', event.todoId);
  },

  _unsetEditingTodoId() {
    this._setSessionVar('editingTodoId', null);
  },

  _updateTodoTitle(event) {
    this.todos.update(event.todoId, {
      $set: {
        title: event.newTitle
      }
    });
  },

  _toggleTodo(event) {
    this.todos.update(event.todoId, {
      $set: {
        isCompleted: !this.todos.findOne(event.todoId).isCompleted
      }
    });
  },

  _changeActiveFilter(event) {
    this._setReactiveVar('activeFilter', event.filter);
  }

});
