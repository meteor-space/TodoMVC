
TodoMVC = Space.flux.Application.extend('TodoMVC', {
  RequiredModules: ['Space.flux'],
  Stores: ['TodoMVC.TodosStore'],
  Components: [
    'TodoMVC.Input',
    'TodoMVC.Footer',
    'TodoMVC.TodoList'
  ],
  Controllers: ['TodoMVC.RouteController', 'TodoMVC.LayoutController'],
  Singletons: ['TodoMVC.TodosTracker']
});
