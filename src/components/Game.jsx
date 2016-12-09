var React = require('react');
var connect = require('react-redux').connect;

var UserGuessList = require('./userGuesses');
//console.log('hi');
var actions = require('../actions/actions');

var DisplayGame = React.createClass({

    userGuess: function() {
        var userGuessVal = this.refs.userGuess.value;
       // console.log(userGuessVal);
        this.props.dispatch(actions.userGuess(userGuessVal));
    },
    render: function() {
          var userGuesses = this.props.userGuess.map(function(userGuess) {
              //console.log(userGuess.guessArray);
              return <UserGuessList guess={userGuess.guessArray} key={userGuess.guessArray} />;
         });
        //console.log(userGuesses);
    

      

    return (
            <div className="game">
                <h1 className="feedback">
                {this.props.userGuess[0].feedback}
                </h1>
                <input type="send" ref="userGuess" />
                <button type="button" onClick={this.userGuess}>
                    Make a Guess!
                </button>
                
                {userGuesses}
                
               
                
            </div>
        );
    }
});


var mapStateToProps = function(state, props) {
    return {
        userGuess: state
    };
};

var Container = connect(mapStateToProps)(DisplayGame);

module.exports = Container;