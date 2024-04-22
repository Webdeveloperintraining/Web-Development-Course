//You only need to use keywords when declaring a variable the first tiem
var myName= prompt("What is your name?");
myName = "John"
// window.alert(myName);
console.log(myName);

console.log(`My name is ${myName}, welcome to the course !`)

// Naming JS Variables Conventions
// Always name your variables with menaingful names to make it easier for other to read and work with your code
// Always give your variables menaningful namesto make it easier for other to read and work with your code

// DO NOT NAME your variables with keywords or just numbers

//THIS CHARACTERS ARE ONLY ALLOWED for naming a variable
var abc123$_;

//STRING CONCATENATION

var variable = 'Peter'
console.log('Hello '+ variable)
console.log(`Hello ${variable}`)

console.log(variable.length)

tweet = prompt('Write a tweet')
console.log(tweet.slice(0,140))
console.log(`You have written ${tweet.length} characters.`)
//console.log(`You have written ${tweet.length} characters, you have -${140 - tweet.length} characters left`)

//Getting a range of characters from a a string using the slice function
var name2 = "Angela";
//name2.slice(0,5)

// Making strings to uppercase and lowercase
//name2 = name2.toUpperCase() 
//name2 = name2.toLowerCase() 
console.log(name2);

//cHALLENGE String Casing Solution
var name3 = prompt('Name?').toLowerCase();
var letterName3 = name3.slice(0,1).toUpperCase();
console.log("Hello, "+letterName3+name3.slice(1,name3.length))

//Challenge Dog Age to Human Calc
var dogAge = parseInt(prompt('Dog Age?'));
var humanAge = ((dogAge-2) * 4) + 21;

console.log(`Your dog is ${humanAge}`);

// Getting Pseudo Random numbers in JAvascript

var n = Math.random();
//Get number between 0 and 5
n = n* 6;

//Get integer numbers between 1 and 6
n = Math.floor(n) + 1;

console.log(n)

// Arrays in JS
var eggs = [1,2,3,4,5,6,7,8];

// print length from a list with length function
console.log(eggs.length)

//Store value from a list in a variable
var myEgg = eggs[1];

// Using the includes function to find if an array has a particular item
console.log(eggs.includes(2));

/*
To add an item to the end of a list you used the list.push(item) function
To delete the last element from a list we use the .pop() function
*/

// FIZZBUZZ challenge
var output = []
var number = 0;
function fizzBuzz(){
    number++;
    output.push(number)
    console.log(output)
}
fizzBuzz()


// How while loops work:
var i = 1;

while (i<2) {
console.log(i);
i++;
}

//99 Bottles of Beer CHALLENGE

var beerBottles = 99;

while (beerBottles != 0) {
    console.log(`${beerBottles} bottles of beer on the wall, ${beerBottles} bottles of beer.`)
    beerBottles--;
    console.log(`Take one down and pass it around, ${beerBottles} bottles of beer on the wall.`)
}
console.log(`No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.`)


// FOR LOOP
