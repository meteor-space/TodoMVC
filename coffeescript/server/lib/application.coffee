
class @TodoMVC extends Space.Application

  requiredModules: ['Space.messaging']

  singletons: [
    'TodoMVC.TodosApi'
    'TodoMVC.TodosPublication'
  ]
