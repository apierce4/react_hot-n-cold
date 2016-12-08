var React = require('react');
//var connect = require('react-redux').connect;

//var actions = require('../actions/actions');

var UserFeedback = React.createClass({
    userFeedback: function(userfeedback) {
        //console.log(userguess);
        
        var guess = (
            <li> {this.props.feedback} </li>
        );
       
        console.log('here');
        console.log(guess);
    
        },
    render: function() {
         //console.log(this.props);
        return (
        <ul className="userguess-history">
            {UserFeedback.userFeedback}
        </ul>
        );
        
    }
});

module.exports = UserFeedback;