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

// function showCityHall(){
//     const userNum = prompt('How many times do you want to see Philadelphia City Hall picture? Pick from 1- 5');
    
//     for(let i = 0; (i < userNum && i < 5); i++ ){
        
//         let pick = confirm("Press a button!\nEither OK or Cancel."); 
//         let docWriteP = document.write(`This is picture ${i + 1}`);
//         let docWrite = document.write("<img src='Philadelphia-City-Hall.jpg' style='width:250px;'/>")
//         choice = (pick === true) ? docWriteP + docWrite : alert('Please pick from 1- 5'); 
//         } 
//     };


    function philly() {

        let phila = '';

        while(phila != 12){
            phila = prompt ("How many letters are in the word 'Philadelphia' Use number for the answer.");
        
            if(phila < 12){
                 alert('Wrong answer. Your number is low. Please pick again.') 
                } else if (phila > 12){
                    alert ('Wrong answer. Your number is high. Please pick again.')
                } else if (phila == 12){
                    alert('You got the right answer') 
                } else {
                    alert('Please enter a number')
                }
            
            }

    };


    function showCityHall(){
        
        let userNum = '';
        let fivetimepic = document.write("<img src='Philadelphia-City-Hall.jpg' style='width:250px;'/>");
        let showtext = document.write('This is the  Philadelphia City Hall picture.')

        while(userNum != 5){
            userNum = prompt('Guess what is my favorite number? Hint: pick from 1- 5');

            if(userNum < 5){
                alert('Wrong number. Your number is low. Please pick again.')
            } else if(userNum > 5){
                alert('Wrong number. Your number is high. Please pick again.')
            } else if(userNum == 5){
                alert('You got the right number'),  showtext + fivetimepic 
            } else {
                alert('Please enter a number')
            }
           
        }

    };
        
        // for(let i = 0; (i < userNum && i < 5); i++ ){
            
        //     let pick = confirm("Press a button!\nEither OK or Cancel."); 
        //     let docWriteP = document.write(`This is picture ${i + 1}`);
        //     let docWrite = document.write("<img src='Philadelphia-City-Hall.jpg' style='width:250px;'/>")
        //     choice = (pick === true) ? docWriteP + docWrite : alert('Please pick from 1- 5'); 
        //     } 
        // };



