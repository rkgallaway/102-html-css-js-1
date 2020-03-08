
// what is your name

var username;
function askName(){
    username = prompt('What is your name?');
    document.write('<h2> Welcome ' + username + '<h2');
}

var fromNJ;
var message;
function welcomeNJ(){

    fromNJ = prompt(username + ', are you from NJ?');
        if (fromNJ === 'yes'){
            message = 'You probably have enjoyed porkroll before.';
        } else {
            message = 'Sit down, this site is going to amaze you.';
        }
    document.write('<h2> ' + message + '</h2>');
}