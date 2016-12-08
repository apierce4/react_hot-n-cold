var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./stores/store');
var GameContainer = require('./components/Game');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <GameContainer />
        </Provider>,
        document.getElementById('app')
    );
});