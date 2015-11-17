let Todos = new Mongo.Collection('todos');

Todos.findCompletedTodos = function() {
  return Todos.find({ isCompleted: true });
};

Todos.findActiveTodos = function() {
  return Todos.find({ isCompleted: false });
};

// Contrived example! Here you could specify your real rules
Todos.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

TodoMVC.Todos = Todos;
