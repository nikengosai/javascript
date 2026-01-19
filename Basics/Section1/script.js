// // Hello world
// console.log("Hello world")

// // values and varaible 

// let firstName = "Niken";
// console.log(firstName);

// let lastName = "Gosai"
// console.log(lastName);

// // Primitive data type
// //1. Number(a one type of simple number)
// //2. String(sequence of characters used to text)
// //3. Boolean(Logical type can be true ot false)
// //4. Undefined(Value taken by a varaible is not yet defined)
// //5. Null(empty value)
 
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);

// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "javascriptIsFun");

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// // Dynaming typing 
// let year;
// year = 2025;

// // if else
// let age = prompt("Enter your age");
// if(age >= 18){
//     console.log("You are aligable for this");
// }
// else{
//     alert("You are not alligable"); 
// }


// if (age >= 18){
//     console.log("You are aligable for this");
// }
// else{
//     let year = 18 - age;
//     alert(`You are too young for this you have need more ${year} years.`);
// }

// // type converion and coercion
// let inputyear = 1990;
// console.log(Number(inputyear)); // type converison
// console.log(inputyear + 18);

// // type coercion
// console.log('1' + 1)
// console.log('10'-'4'-'3'-2+'5')

// // truthy and falsy value
// // falsy values are 0,undefined,"",null,NaN

// // == & ===
// let guessNumber = Number(prompt("Enter your lucky number"));
// // console.log(Number(guessNumber))
// if(guessNumber === 7){
//     console.log("It is the luckiest number some people the number is 7")
// }
// else if(guessNumber === 17){
//     console.log("It is the luckiest number some people the number is 17")
// }
// else if(guessNumber === 27){
//     console.log("It is the luckiest number some people the number is 27")
// }
// else if(guessNumber === 9){
//     console.log("It is the luckiest number some people the number is 9")
// }
// else{
//     console.log("Your suggested correct number is not a right try agin")
// }

// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// /* Write your code below. Good luck! 🙂 */
// let scoreDolphin = (96 + 108 + 89)/3;
// let scoreKoalas = (88 + 91 + 110)/3;
// console.log(scoreDolphin,scoreKoalas);
// if(scoreDolphin > scoreKoalas){
//     console.log("Dolphins win the trophy");
// }
// else if(scoreKoalas > scoreDolphin){
//     console.log("Koalas win the trophy");
// }
// else{
//     console.log("Both win the trophy")
// }

// Switch case
// const day = prompt("Enter a day");
// switch(day){
//     case "monday":
//         console.log("follow the your plans");
//         break;
//     case "tuesday":
//         console.log("see your plans and attend them");
//         break;
//     case "wednesday":
//         console.log("attend theory lecture");
//         break;
//     case "thurshday":
//         console.log("Write a code");
//         break;
//     case "friday":
//         console.log("Complete your pending work");
//         break;
//     case "saturday":
//         console.log("look at your pending work");
//         break;
//     case "sunday":
//         console.log("enjoy your weekend");
//         break;
// }


// statements and expression

// In programming, the simplest way to understand the difference is that an expression evaluates to a value, while a statement is an instruction that performs an action. Think of an expression as a phrase and a statement as a complete sentence. 

// Expression
// An expression is a combination of values, variables, and operators that the computer evaluates to produce a single value. 

// Examples:
// 5 (A value by itself is an expression)
// 10 + 5 / 6.0 (A calculation that results in a number)
// "Hello" + " World" (Combines two strings into one value: "Hello World")
// x > 0 (Evaluates to a boolean value, either True or False)
// calculate_area(radius) (A function call that returns a result) 

// statement
// A statement is a complete command or instruction that tells the computer to do something, such as create a variable, change a value, or control the flow of the program. Statements generally do not return a value you can use in a calculation. 

// Examples:
// let count = 5; (A declaration and assignment that creates a variable named count)
// print("Hello"); (An action that displays text on the screen)
// if (x > 0) { ... } (A control flow statement that decides which code to run next)
// return total; (A statement that exits a function and passes an expression's value back to the caller) 

// Ternary operator
const age = 18;
age >= 18 ? console.log("I like to drink a water") : console.log("I also like to drink a water");
// condition (question mark)? if statement : else satement 