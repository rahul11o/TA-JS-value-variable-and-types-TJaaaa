// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let yourNumb = +prompt("put any number")
if(yourNumb % 2 == 0){
  alert(" number  is even");
}
else {
  alert("number is odd");
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let firstNumb = +prompt("put any number here");
let secondNumb = +prompt("put another number here");
if(firstNumb > secondNumb){
  alert(`${firstNumb} is greater`);
} else{
  alert(`${secondNumb} is greater `);
}


// 3. Convert the above code using`?` terniary operator

firstNumb > secondNumb? 
alert(`${firstNumb} is greater`)
:
alert(`${secondNumb} is greater`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

yourHouse = prompt(`what is your house name?
options -
a) stark
b) lannister
c) or any other `)

if(yourHouse == "stark"){
  alert("Winter is coming");
} else if(yourHouse == "lannister"){
  alert(" A lannister always pays his debt");
} else{
  alert(" All men must die");
}

// 5. Convert the above code using`?` terniary operator

 yourHouse == "stark" ? alert("winter is coming")
  : 
 yourHouse == "lannister" ? alert("A lannister always pays his debt")
  :
 alert("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = +prompt("choose a number of month (1-12), and i will tell number of day in it.")
switch(true){
  case month == 2 :
    alert("number of days = 28");
    break;
  case month % 2 == 0:
    alert("number of days = 30");
  break;
  case month % 2 != 0 :
    alert("number of days = 31");
    break;
  default:
    alert("match not found");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = + prompt("what is your  salary before tax deduction?")
switch(true){
  case salary <= 20000:
    alert(`your net salary is ${salary-salary*10/100}`);
    break;
  case salary <= 40000:
    alert(`your net salary is ${salary-salary*20/100}`);
    break;
  case salary > 50000:
    alert(`your net salary is ${salary-salary*30/100}`);
    break;
  default :
  alert("match not found")
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
// if else

let yourMarks = +prompt("how much did you score?")
if (yourMarks > 100) {
  alert("Marks can't be greater than 100");
} else if (yourMarks > 80 && yourMarks < 100){
  alert("Grade A");
} else if (yourMarks > 50 && yourMarks < 80){
  alert("Grade B");
} else if (yourMarks > 30 && yourMarks < 50){
  alert("Grade C");
} else if (yourMarks > 0){
  alert("Grade D");
} else{
  alert("input is not valid");
}

// switch

switch(true){
  case yourMarks > 100:
    alert("Marks can't be greater than 100");
    break;
  case yourMarks > 80 && yourMarks < 100:
    alert("Grade A");
    break;
  case yourMarks > 50 && yourMarks < 80:
    alert("Grade B");
    break;
  case yourMarks > 30 && yourMarks < 50 :
    alert("Grade C");
    break;
  case yourMarks > 0 :
    alert("Grade D");
    break;
  default:
    alert("match not found");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside?
1)sunny
2)rainy
3)hot
4)freezing`);
if(weather == "sunny"){
  alert("Wear a T-shirt");
} else if(weather == "rainy"){
  alert(`Don't forget to take your raincoat`);
} else if (weather == "hot"){
  alert("Get a hanky");
} else if (weather == "freezing"){
  alert("Get your sweeter on");
} else{
  alert("Not a valid input");
}

