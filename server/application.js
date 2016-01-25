
TodoMVC = Space.Application.extend('TodoMVC', {
  requiredModules: ['Space.messaging'],
  singletons: [
    'TodoMVC.TodosApi',
    'TodoMVC.TodosPublication'
  ],

  onInitialize() {
    this.injector.map('TodoMVC.Todos').asStaticValue();
  }

});
