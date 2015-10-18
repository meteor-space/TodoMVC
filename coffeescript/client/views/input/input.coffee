
class TodoMVC.Input extends Space.flux.BlazeComponent

  @register 'input'

  events: -> [
    'keyup #new-todo': (event) ->
      # When it was the ENTER key
      if event.keyCode is 13
        # Tell mediator about it
        input = @$('#new-todo').val()
        @publish new TodoMVC.TodoCreated title: input
        # Reset input
        @$('#new-todo').val('')
  ]
