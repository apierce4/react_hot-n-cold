var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('../reducers/reducers');

var store = createStore(reducers.gameReducer);
module.exports  = store;