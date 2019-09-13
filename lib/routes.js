FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/todos', {
  name: 'todos',
  action() {
    BlazeLayout.render('MainLayout', { main: 'todos' });
  }
});
