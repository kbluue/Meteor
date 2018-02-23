import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
export const Users = new Mongo.Collection('users');

export function fTest(a, b) {
    return a + b;
}

export function addToTasks(inputText) {
    Tasks.insert({
        inputText,
        createdAt: new Date(),
    })
}