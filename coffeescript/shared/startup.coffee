
Meteor.startup =>
  TodoMVC.app = new TodoMVC()
  TodoMVC.app.start()
  FlowRouter.initialize()
