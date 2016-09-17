import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import Items from './items';

Meteor.methods({
  createNewItem(itemOne, itemTwo) {
    check(itemOne, String);
    check(itemTwo, String);
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
  },
  voteOnItem(which, id) {
    check(which, String);
    check(id, String);

    if (which === 'itemOne') {
      Items.update(id, {
        $inc: {'itemOne.value': 1}
      });
    } else {
      Items.update(id, {
        $inc: {'itemTwo.value': 1}
      });
    }

  }

});
