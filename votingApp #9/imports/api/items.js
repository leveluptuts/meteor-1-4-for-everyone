import {Mongo} from 'meteor/mongo';
import './methods';

const Items = new Mongo.Collection('items');
export default Items;
