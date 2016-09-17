import {Meteor} from 'meteor/meteor';
import Items from './items';

Meteor.methods({
  createNewItem(itemOne, itemTwo) {
    Items.insert({
      itemOne: {
        text:itemOne,
        value: 0
      },
      itemTwo: {
        text:itemTwo,
        value: 0
      }
    });

  }

});
