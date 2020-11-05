//we want a list of users, using array and objects
let database = [
    {
        username: "john",
        password: "secret",
    }
];

//a list of news, using array and objects
let newsFeed = [
    {
        username: "Bob",
        timeline: "so tired from learning",
    },
    {
        username: "Sally",
        timeline: "Javascript is tough",
    }
];

//action to check user credentials
//good to put this at bottom so database/feed is loaded first
let userNamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
    if (user === database[0].username 
        && pass === database[0].password) {
            console.log(newsFeed);
        } else { 
            alert("Sorry, wrong username and password");
        }
}

//calling the function, and the arguments are the 
//answers to the prompt
signIn(userNamePrompt, passwordPrompt);

