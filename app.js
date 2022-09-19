// const userName = prompt ('What is your name?');
// console.log(`Hello, ${userName}`);

// let gender = prompt ('Are you male or female');
// console.log(gender)

// message = (gender.toLowerCase() === 'male') ? 'You are male.' : 'You are female.'
// console.log(message)


// let userAge = prompt ('What is your age?');

// if (userAge < 21){
// message1 = 'You are too young to travel by yourself.'
// } else if (userAge >= 21 && userAge < 70){
//     message1 = 'You can travel by yourself.'
// } else {
//     message1 = 'Yor are too old to travel by yourself.'
// }

// document.write(`Hello, ${userName}. ${message} Your age is ${userAge}. ${message1}`);


function userName() {

    let userName = prompt ('What is your name?');
    return document.write(`Hello, ${userName}.`);
};
// userName();
// console.log(userName());

function userGender() {

    let gender = prompt ('Are you male or female');
    message = (gender.toLowerCase() === 'male') ? 'You are male.' : 'You are female.';
    return document.write(message);
};
// userGender();
// console.log(userGender());


function userAge() {
    let userAge = prompt ('What is your age?');
    if (userAge < 21){
    message1 = `You are ${userAge} years old. You are too young to travel by yourself.`;
    } else if (userAge >= 21 && userAge < 70){
    message1 = `You are ${userAge} years old. You can travel by yourself.`
    } else {
    message1 = `You are ${userAge} years old. You are too old to travel by yourself.`;
}
return document.write(message1);
};
// userAge();
// console.log(userAge());

// funtion webMessage() {
//     return `Hello, ${userName()}. ${userGender()} Your age is ${userAge()}. ${userAge()}`
// };
// webMessage();



