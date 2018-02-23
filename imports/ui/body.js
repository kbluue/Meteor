import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { Users } from '../api/tasks.js';
import { fTest } from '../api/tasks.js';
import { addToTasks } from '../api/tasks.js';
 
import './body.html';
 
Template.body.helpers({
  myTasks: [
    { text: 'This is task 1' },
    { text: '8'},
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
  equals8: function(a) {
      return a == '8';
  },
  mongoTasks() {
      return Tasks.find({});
  },
  users() {
      return Users.find({});
  },
  ftest() {
      return fTest(4, 1111);
  }
});

Template.body.events({
    'submit .elementName'(event){
        //prevent default browser action
        event.preventDefault();

        //get form element values
        const element = event.target;
        const elementText = element.text.value;

        //add to db using methos
        addToTasks(elementText);

        //clear element
        element.text.value = '';
    }
})