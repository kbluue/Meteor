import { Template } from 'meteor/templating';
import { RD } from 'meteor/'

import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.helpers({
 tasks() {
   return Tasks.find({}, {sort: {createdAt: -1}});
 },
});

Template.body.events({
  'submit .new-task'(addTaskEvent){
    addTaskEvent.preventDefault();

    const target = addTaskEvent.target;
    const newTask = target.taskName.value;

    Tasks.insert({
      text: newTask, createdAt: new Date(),
    });

    target.taskName.value = '';
  },
})