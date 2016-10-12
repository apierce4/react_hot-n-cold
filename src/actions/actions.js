/**
 * Start GAME
 */
var START_GAME = 'START_GAME';
var startGame = function() {
    return {
        type: START_GAME
    };
};
/**
 * Set Random Number
 */
// var RANDOM_NUMBER = 'RANDOM_NUMBER';
// var randomNumber = function(randomnum){
//   return{
//       type: RANDOM_NUMBER,
//       randomnum: randomnum
//   };
// };
/** collect user guess and validates
 * the users guess against random number.
 */
var USER_GUESS = 'USER_GUESS';
var userGuess = function(guess) {
  return {
    type: USER_GUESS,
    guess: guess
  };
};

exports.START_GAME = START_GAME;
exports.startGame = startGame;

// exports.RANDOM_NUMBER = RANDOM_NUMBER;
// exports.randomNumber = randomNumber;

exports.USER_GUESS = USER_GUESS;
exports.userGuess = userGuess;