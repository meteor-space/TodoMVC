
TodoMVC = Space.Application.extend('TodoMVC', {

  requiredModules: ['Space.flux'],

  stores: ['TodoMVC.TodosStore'],

  components: [
    'TodoMVC.Input',
    'TodoMVC.Footer',
    'TodoMVC.TodoList'
  ],

  controllers: [
    'TodoMVC.RouteController',
    'TodoMVC.LayoutController'
  ],

  singletons: ['TodoMVC.TodosTracker']
});
