const userName = prompt ('What is your name?');
console.log(`Hello, ${userName}`);

let gender = prompt ('Are you male or female');

message = (gender.toLowerCase == 'male') ? 'You are male.' : 'You are female.'

let userAge = prompt ('What is your age?');

if (userAge < 21){
message1 = 'You are too young to travel by yourself.'
} else if (userAge >= 21 && userAge < 70){
    message1 = 'You can travel by yourself.'
} else {
    message1 = 'Yor are too old to travel by yourself.'
}

document.write(`Hello, ${userName}. ${message} Your age is ${userAge}. ${message1}`);