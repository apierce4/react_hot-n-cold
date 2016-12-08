var actions = require('../actions/actions');
var update = require('react-addons-update');
// var store = require('../stores/store');

/**
 * State object including game data
 */
var initialState = [
  {
    guessArray: [],
    secretNumber: Math.floor((Math.random() * 100) + 1),
    feedback: 'Make your Guess!',
    winner: false
  }
];

// var currentState;
var gameReducer = function(state, action) {
  state = state || initialState;

  if (action.type === actions.START_GAME){
    console.log('start game');
    return state.concat({
      guessArray: [],
      secretNumber: Math.floor((Math.random() * 100) + 1),
      feedback: 'Make your Guess!',
      winner: false
    });
  }
  else if (action.type === actions.USER_GUESS){
     console.log('user guess');
     console.log(typeof action.guess);
     var userGuessNum = parseInt(action.guess);
    if (typeof userGuessNum === 'number' && (userGuessNum >= 1 && userGuessNum <= 100)) {

      var currentState = update(state, {
                                  [state.length - 1]: {
                                    guessArray:
                                      {$push: [action.guess]
                                    },
                                    feedback:
                                      {$set: ''}
                                    }
                                  });
      console.log(currentState);
      
      var secretNumber = state[state.length - 1].secretNumber;
      
      if (secretNumber == action.guess) {
            currentState[currentState.length - 1].winner = true;
            currentState[currentState.length-1].feedback = 'Winner, winner!';
        } else if (Math.abs(secretNumber - action.guess) < 10) {
            currentState[currentState.length-1].feedback = 'HOT!';
        } else if (Math.abs(secretNumber - action.guess) < 20 && Math.abs(secretNumber - action.guess) > 9) {
            currentState[currentState.length-1].feedback = 'Almost there!';
        } else if (Math.abs(secretNumber - action.guess) < 30 && Math.abs(secretNumber - action.guess) > 19) {
            currentState[currentState.length-1].feedback = '...warm.';
        } else {
            currentState[currentState.length-1].feedback = 'Freezing.';
        }
    

      return currentState;
    }
    else {
      var currentState = update(state, {
        [state.length - 1]: {
          feedback: {$set: 'Invalid input! Enter a number between 1 & 100.'}
        }
      });
      return currentState;
    }
  }
  //console.log(state);
  return state;
};

exports.gameReducer = gameReducer;