// Math method 

// Q-1

/* num = parseFloat(prompt(" Enter any number:"));
 
document.write(`
  Number: ${num} "<br>
  Round off value: ${Math.round(num)} "<br>
  Floor value: ${Math.floor(num)} "<br>
  Ceil value: ${Math.ceil(num)}
`);



// Q-2


var num = parseFloat(prompt("Enter a negative floating point number:"));
 
document.write(`
  Number: ${num} "<br>
  Round off value: ${Math.round(num)} "<br>
  Floor value: ${Math.floor(num)} "<br>
  Ceil value: ${Math.ceil(num)} 
`); */


// Q-3

// var num = parseFloat(prompt("Enter a number:"));
// document.write(`Absolute value of ${num} is ${Math.abs(num)}`);



// Q_4

// var diceVAllue = Math.floor (Math.random () * 6)+ 1;
// document.write ( "You rolled a " + diceVAllue );


// Q-5



// var head = prompt("Enter head user");

// var tail = prompt("Enter tail user");

// var toss = Math.random();

// var selectedValue = Math.round(toss);

// if (selectedValue === 0) {
//   alert(head, " win the toss");
// } else {
//   alert(tail, " win the toss");
// }



// Q-6

// var randomNumber = 
// Math.floor (Math.random () * 100 ) +1 ; 

// document.write (randomNumber);


// Q-7

    // let weightInput = prompt("Enter your weight:");
    
    // if(weightInput.includes("kgs") || weightInput.includes("kilograms")){

    //   let weightValue = parseFloat(weightInput.replace(/[^0-9.]/g, ''));

    //   document.write("Your weight is " + weightValue + " kgs");

    // }else{
    //   document.write("Your weight is " + weightInput + " kgs");
    // }



// Q-8

let secretNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = parseInt(prompt("Guess a number between 1 and 10"));

if (userGuess === secretNumber) {
  alert("Congratulations! You guessed the secret number!");

} else {
  alert("Sorry, the secret number was " + secretNumber);
}



