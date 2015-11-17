
class @TodoMVC extends Space.Application

  requiredModules: ['Space.flux']

  stores: [
    'TodoMVC.TodosStore'
  ]

  components: [
    'TodoMVC.Input'
    'TodoMVC.Footer'
    'TodoMVC.TodoList'
  ]

  controllers: [
    'TodoMVC.RouteController'
    'TodoMVC.LayoutController'
  ]

  singletons: [
    'TodoMVC.TodosTracker'
  ]
