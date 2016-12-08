var React = require('react');
//var connect = require('react-redux').connect;

//var actions = require('../actions/actions');

var UserGuesses = React.createClass({
    updateUserGuessList: function(userguess) {
        //console.log(userguess);
        var guesses = [];
        var guess = (
            <li> {this.props.userGuess.guess} </li>
        );
        guesses.push(guess);
        console.log('here');
        //console.log(guess);
        return guesses;
        },
    render: function() {
         //console.log(this.props);
        return (
        <ul className="userguess-history">
            {UserGuesses.updateUserGuessList}
        </ul>
        );
        
    }
});

module.exports = UserGuesses;