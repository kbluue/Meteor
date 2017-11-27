import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { Random } from 'meteor/random';

import './body.html';
import './task.js';

  Template.body.helpers({
    tasks() {
      return Tasks.find({}, { sort: { timeCreated: -1}});
    },
  });

  Template.body.events({
    'submit .new-task'(event) { // action css-name
      // Prevent default browser form submit
      event.preventDefault();
   
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
    // const text = event.target.text.value;
    const id = Random.id(9);
   
      // Insert a task into the collection
      Tasks.insert({
        text,
        timeCreated: new Date(), // current time
        id,
      });
   
      // Clear form
      target.text.value = '';
    },
  });