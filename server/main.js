import { Meteor } from 'meteor/meteor';

Tasks = new Mongo.Collection('tasks');

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  addTask: function(name) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('no access');
    }

    Tasks.insert({
      name,
      createdAt: new Date(),
      userId: Meteor.userId()
    });
  },

  deleteTask: function(taskId) {
    Tasks.remove(taskId);
  }
});

Meteor.publish('tasks', function() {
  return Tasks.find({ userId: this.userId });
});
