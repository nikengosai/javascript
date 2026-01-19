'use strict';
// console.log("Clean file test");
// alert("hello") 

// have to write all code of function
// function ageCalculation(birthYear) {
//     return 2025 - birthYear;
// }

// function cutFruitPieces(fruit) {
//     return fruit * 4;   // each fruit gives 4 pieces
// }

// function fruitProcessor(apples, bananas) {
//     const applePieces = cutFruitPieces(apples);
//     const bananaPieces = cutFruitPieces(bananas);

//     const juice = `Juice with ${applePieces} apple pieces and ${bananaPieces} banana pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (firstScore,secondScore,thirdScore) => {
//     const totalAverage = (firstScore + secondScore + thirdScore) / 3;
//     return totalAverage;
// }

// // console.log(calcAverage(44,23,71));

// const scoreDolphins = calcAverage(44,23,71);
// // console.log(scoreDolphins);
// const scoreKoalas = calcAverage(65,54,49);
// // console.log(scoreKoalas);

// function checkWinner(){
//     const avgDolphins = scoreDolphins;
//     const avgKoalas = scoreKoalas;
//     // console.log(avgKoalas,avgDolphins)

//     if(avgDolphins >= 2 * avgKoalas){
//         return`Dolphin win (${avgDolphins} vs. ${avgKoalas})`
//     }
//     else if (avgKoalas >= 2 * avgDolphins){
//         return `Kolas win (${avgKoalas} vs. ${avgDolphins})`
//     }
//     else{
//         console.log("No team wins...")
//     }
// }
// console.log(checkWinner());

// arrays

// const array1 = ['niken', 'gosai'];
// console.log(array1);

// console.log(array1[0]);
// console.log(array1[1]);

// // another syntax to create an array
// const array2 = [0, 21, 2, 3];
// console.log(array2[0]);
// console.log(array2[1]);
// console.log(array2[2]);
// console.log(array2[array2.length - 1]);

// function yearsAge(birthYear) {
//     return 2025 - birthYear
// }

// const arrayAge = [1990, 1991, 1992, 2008];

// const age1 = yearsAge(arrayAge[0]);
// const age2 = yearsAge(arrayAge[1]);
// const age3 = yearsAge(arrayAge[2]);
// const age4 = yearsAge(arrayAge[arrayAge.length - 1]);

// const allAge = [age1, age2, age3, age4];
// console.log(allAge);

// // methods

// // insert in array
// // push is insert the value in a array at the end
// array1.push(18);
// console.log(array1);

// // unshift is insert the value in a array at the end
// array1.push("Jetpur");
// console.log(array1);

// // delte from array 
// // push is used to remove from last in array
// array1.push();
// console.log(array1);

// // shift is used to remove from last
// array1.shift();
// console.log(array1);

// // index of a value 
// array1.indexOf("niken") // it will return a index of a value
// console.log(array1)

// // includes is return only boolan values if the values is in aray ot will return true else it will return false
// array1.includes("gosai")
// console.log(array1);

// array1.includes(18);
// console.log(array1)

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

/* Write your code below. Good luck! 🙂 */
// 'strict mode';

// function calcTip(billValue) {

//     if (billValue >= 50 && billValue <= 300) {
//         const tip = billValue * 0.15;
//         const totalbill = billValue + tip;
//         console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${totalbill}`);
//         return tip;
//     }

//     else {
//         let tip1 = billValue * 0.20;
//         let totalbill1 = billValue + tip1;
//         console.log(`The bill was ${billValue}, the tip was ${tip1}, and the total value ${totalbill1}`);
//         return tip1;
//     }
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]),
// calcTip(bills[1]),
// calcTip(bills[2])
// ];


// const totals = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ];

// console.log(totals);
// console.log(tips);
// console.log(bills);

// objects 
// syntax of  creating an object
// variable variable_name = {

// };

// const data = {
//     firstName: "Niken",
//     lastName: "Gosai",
//     // age: 2025 - 2008,
//     birthYear: 2008,
//     friends: ["niken", "last", " ouchhh"],
//     hasDrivingLicense: true,
//     // calcAge: function (birthYear) {
//     //     return 2025 - birthYear;
//     // }

//     calcAge: function () {
//         return 2025 - this.birthYear
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} years old ,and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving licence `
//     }
// }

// // dot and bracket notation in object
// console.log(data.firstName);
// console.log(data['firstName']);

// const nameKey = 'Name';
// console.log(data['first' + nameKey]);
// console.log(data['last' + nameKey]);

// const interestedIn = prompt("What do you want to know about niken data choose firstName,lastName,age")

// if (data[interestedIn]) {
//     console.log(data[interestedIn]);
// }
// else {
//     console.log("What do you want to know about niken data choose firstName,lastName,age")
// }
// // retrive data from an object and object vaklue in array
// console.log(data.friends[0])

// //add value in object
// data.job = "Nothing";
// data['location'] = 'none';
// console.log(data);

// console.log(data.getSummary());

// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }



// for loop
// for (let rep = 1; rep <= 15; rep++) {
//     console.log(`Lifting weights repitaion ${rep}🏋🏻‍♂️`)
// }

// const data = [
//     "Niken",
//     "Gosai",
//     // age: 2025 - 2008,
//     2008,
//     17,
//     ["niken", "last", " ouchhh"]
// ]

// const storeData = [];

// for (let i = 0; i < data.length; i++) {
//     // read only data from an array
//     console.log(data[i])

//     // store the data in a  another array
//     // first type to add data in a another array
//     // storeData[i] = data[i];
//     // second type to add data in a another array
//     storeData.push(data[i]);
// }
// console.log(storeData);

// const years = [2006, 2007, 2008, 2009];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     // const ageRecord = 2025 - years[i];
//     // ages[i] = ageRecord
//     ages.push(2025 - years[i])
// }

// console.log(ages)

// console.log("----continue statement-------")
// for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] !== 'string') continue;
//     console.log(data[i])
// }

// console.log("----break statement--------")
// for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') break;
//     console.log(data[i])
// }


const data = [
    "Niken",
    "Gosai",
    2008,
    17,
    ["niken", "last", " ouchhh"]
]

// reverse a loop
// for (let i = data.length - 1; i >= 0; i--) {
//     console.log(i, data[i])
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`Exercise set number ${i}`)
//     for (let j = 1; j <= 12; j++) {
//         console.log(`Exercise number in a ${i} and rap is ${j}🏋🏻‍♂️`)
//     }
// }

// while loop

let i = 0;
while (i <= 10) {
    console.log(`Rap number is ${i}`)
    i++;
}

console.log();
