var React = require('react');

//var connect = require('react-redux').connect;

var actions = require('../actions/actions');

var UserGuesses = React.createClass({

    render: function(){
        
        console.log(this.props.guess);
        var userGuesses = this.props.guess;
        var allguesses = [];
        for (var i=0; i<userGuesses.length; i++) {
             console.log(userGuesses[i]);
             var guesses = <li> {userGuesses[i]} </li>;
             allguesses.push(guesses);
         }
        console.log(allguesses);
        return(
          
            <ul>
           {allguesses}
           </ul>
        );
        
        
    }
});

module.exports = UserGuesses;