// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

// let yourAge = prompt("what is your age?") 
// if(yourAge < 4){
//   alert("Hey kido! Can you walk?")
// } else if(yourAge < 12){
//   alert("You are too young to participate in the marathon.")
// } else if(yourAge < 55){
//   alert("You can participate in the marathon")
// } else{
//   alert("You are too old to participate in the marthon")
// }

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

//  let count = +prompt("How many 'e' should be there in Hello?")
// const start = "h";
// const end = "llo";
// let middle ="";

// for( let i= 0; i < count; i++){
//   middle += "e";
// }
// alert(start + middle + end);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
/*
let numb = +prompt("Addition of first n natural number, put the n as per your wish");
let sum = 0;
for(i = 1;  i <= numb; i++ ){
  sum +=i;
}
alert(sum);
*/

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

/*let yourNumb = +prompt("put any number as per your wish");
switch(yourNumb){
  case 1:
   alert("ONE");
   break;
  case 2:
   alert("TWO");
   break;
  case 3:
   alert("THREE");
   break;
  case 4:
   alert("FOUR");
   break;
  case 5:
   alert("FIVE");
   break;
  case 6:
   alert("SIX");
   break;
  case 7:
   alert("SEVEN");
   break;
  case 8:
   alert("EIGHT");
   break;
  case 9:
   alert("NINE");
   break;
  default:
   alert("PLEASE TRY AGAIN");
  
} 
*/

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/
/*
let yourMarks = +prompt("how much did you score out of 100?")
switch(true){
  case yourMarks > 90:
    alert("Your Grade is AA");
    break;
  case yourMarks > 80 && yourMarks <= 90:
    alert("Your Grade is AB");
    break;
  case yourMarks > 70 && yourMarks <= 80 :
    alert("Your Grade is BB");
    break;
  case yourMarks > 60 && yourMarks <= 70:
    alert("Your Grade is BC");
    break;
  case yourMarks > 50 && yourMarks <= 60:
    alert("Your Grade is CC");
    break;
  case yourMarks > 40 && yourMarks <= 50:
    alert("Your Grade is CD");
    break;
  case yourMarks > 30 && yourMarks <= 40:
    alert("Your Grade is DD");
    break;
  default :
    alert("Your Grade is FF");  
}
*/

// [Your code goes here]

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
/*
let firstInt = +prompt("put any integer");
let secondInt = +prompt("put another integer");
if(firstInt > secondInt){
  alert(`this is larger one  - ${firstInt}`);
} else{
  alert(`this is larger one - ${secondInt}`);
}
*/

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
/*
const numbOne = +prompt("put the first number");
const numbTwo = +prompt("put the second number");
const numbThree = +prompt("put the third number");

const product = numbOne * numbTwo * numbThree;
if(product > 0){
  alert("the product of first, second and third number is positive");
} else{
  alert("the product of first, second and third number is negative");
}

*/

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
const firstNumb = +prompt("put the first numb")
const secondNumb = +prompt("put the second numb")
const operation = prompt("operation(Add,Sub,Multi, Div )");

switch(operation){
  case "Add" :
    alert(`The addition of ${firstNumb} and ${secondNumb} is ${firstNumb+secondNumb}`);
    break;
  case "Sub" :
    alert(`The substraction of ${firstNumb} and ${secondNumb} is ${firstNumb-secondNumb}`);
    break;
  case "Multi" :
    alert(`The multiplication of ${firstNumb} and ${secondNumb} is ${firstNumb*secondNumb}`);
    break;
  case "Div" :
    alert(`The division of ${firstNumb} and ${secondNumb} is ${firstNumb/secondNumb}`);
}

