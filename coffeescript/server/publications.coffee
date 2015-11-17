class TodoMVC.TodosPublication extends Space.messaging.Publication

  dependencies: {
    todosCollection: 'TodoMVC.Todos'
  }

  publications: -> [
    'todos': (context, filter) ->
      # Publish filtered data based on the filter parameter
      switch filter
        when 'all' then @todosCollection.find()
        when 'active' then @todosCollection.find isCompleted: false
        when 'completed' then @todosCollection.find isCompleted: true
        else context.ready()
  ]
