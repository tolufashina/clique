/*
Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.


Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.


Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

*/

// let scre = window.prompt("Enter your score:");

// newscore = Number(scre);

// if(newscore >= 80 && newscore <=100){
//     console.log("Your score is 'A'");
// }

// else if (newscore >= 50 && newscore <= 79){
//     console.log("Your score is 'B'");
// }
// else{
//     console.log("You have Failed");
// }

// let age = window.prompt("Enter your age: ");
// newAge = Number(age);

// if(newAge >= 18){
//     console.log(`you are${newAge}. You are old enough to drive`);
// }
// else if(isNaN(newAge)){
//     console.log("is not a Number");
// }

// else{
//     console.log("wait for the number of years you turn 18");
// }


// let age2 = window.prompt("Enter your age");
// myage = Number(age2);

// let age3 = window.prompt("Enter your age");
// yourage = Number(age3);

// if(myage > yourage){
//     console.log("I am older than you");
// }
// else if(yourage > myage){
//     console.log("You are older than me");
// }

// else if(myage === yourage){
//     console.log("We are the same age");
// }

// switch(true){
//     case myage > yourage:
//         console.log("I am older than you");
//         break;
//     case yourage > myage:
//         console.log("You are older than me");
//         break;
//     default:
//         console.log("Lets go");
// }

/* const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
Declare an empty array;


Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

 */

const arr = Array();

const arre = ["fash", 18, "27-8-197", 19, "Bigjoe","h" ,"lagos", "Nigeria"]
console.log(arre.length);
console.log(arre[0]);
if(arre.length % 2 === 1){
    console.log("The length of arre is an odd Number");
    console.log(arre[Math.floor(arre.length / 2)]);
}else{
    console.log(arre[arre.length / 2]);
}

console.log(arre[arre.length -1]);

const mixedDataTypes = ["Name", 18 , {name2 :"Joseph"}, true, 4.2];

console.log(mixedDataTypes);

const itCompanies = ["Facebook", "Twitter", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// console.log(itCompanies.join().toUpperCase());
if(itCompanies.includes("Twitter")){
    const newMix = itCompanies.indexOf("Twitter");
    console.log(`Here is your answer ${itCompanies[newMix]}`);
}
else{
    console.log("Error");
}