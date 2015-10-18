
class @TodoMVC extends Space.flux.Application

  RequiredModules: ['Space.flux']
  Stores: [
    'TodoMVC.TodosStore'
  ]
  Components: [
    'TodoMVC.Input'
    'TodoMVC.Footer'
    'TodoMVC.TodoList'
  ]
  Controllers: [
    'TodoMVC.RouteController'
    'TodoMVC.LayoutController'
  ]
  Singletons: [
    'TodoMVC.TodosTracker'
  ]
