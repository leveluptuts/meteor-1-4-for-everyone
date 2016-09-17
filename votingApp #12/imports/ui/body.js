import {Template} from 'meteor/templating';

import Items from '../api/items.js';

import './body.html';
import './item.js';

Template.body.onCreated(function() {
  Meteor.subscribe('allItems');
});

Template.body.helpers({
  items() {
    return Items.find({}, {
      limit: 1,
      sort: { lastUpdated: 1 }
    });
  },
  loggedIn() {
    return Meteor.userId();
  }
});

Template.body.events({
  'submit .new-items'(event) {
    event.preventDefault();
    Meteor.call('createNewItem', event.target.item1.value, event.target.item2.value, (err, res)=>{
      if(err) {
        console.log(err);
      } else {
        event.target.item1.value = '';
        event.target.item2.value = '';
      }
    });
  }
});
