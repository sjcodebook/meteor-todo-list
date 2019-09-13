import { Template } from 'meteor/templating';

Tasks = new Mongo.Collection('tasks');

Template.todos.helpers({
  tasks: function() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  }
});

Template.todos.events({
  'submit .add-task': function(event) {
    event.preventDefault();
    let name = event.target.name.value;
    Meteor.call('addTask', name);
    event.target.name.value = '';
  },

  'click .delete-task': function(event) {
    event.preventDefault();
    if (confirm('Are you sure?')) {
      Meteor.call('deleteTask', this._id);
    }
  }
});

Meteor.subscribe('tasks');
