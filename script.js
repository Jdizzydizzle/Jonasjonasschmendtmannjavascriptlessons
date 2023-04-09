'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;
// const if = 23; 

//functions can hold one or more complete lines of code

function logger() {
    console.log('My name is Jonas');
}

logger(); // invoking the function - does not produce a value
logger();
logger();

function fruitProcessor(apples, oranges) { //paremeters get defined when function is called

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice; // returns the result of this function
}
const appleJuice = fruitProcessor(5, 0); //captures the result of the function
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); //console.log is a function

const num = Number('23');
console.log(num); 

function describeCountry(country, population, capitalCity) {
    const countryDescription = `${country} has ${population} people
    and its capital city is ${capitalCity}`;
    return countryDescription;
}

const countryDescription = describeCountry('Ireland', 4000000, 'Dublin'
);
console.log(countryDescription);

const neighbourCountryDescription = describeCountry('England', 80000000, 'London'
);
console.log(neighbourCountryDescription);

const otherNeighbourCountryDescription = describeCountry('France', 100000000, 'Paris'
);
console.log(otherNeighbourCountryDescription); 


// function declaration



function calcAge1(birthYear) { //parameter is like a local variable
    return 2037 - birthYear; //takes value out of function
}
const age1 = calcAge1(1991); //argument the actual value used to fill in paremeter

console.log(age1);

// function expression
const calcAge2 = function (birthYear) { // function with no name is an anonymous function
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);   

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}
const pop1 = percentageOfWorld1(1441000000);
const pop2 = percentageOfWorld1(3000000);
const pop3 = percentageOfWorld1(50000000);

console.log(pop1, pop2, pop3); 

const percentageOfWorld2 = function (population) {
    return (population / 7900000000) * 100;
}
const pop1 = percentageOfWorld2(1441000000);
const pop2 = percentageOfWorld2(3000000);
const pop3 = percentageOfWorld2(50000000);

console.log(pop1, pop2, pop3); 

//arrow function is a shorter, faster function 

// function expression


  const calcAge3 = birthYear => 2037 - birthYear; //no need for curly brackets or return
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); 

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}
const pop1 = percentageOfWorld1(1441000000);
const pop2 = percentageOfWorld1(3000000);
const pop3 = percentageOfWorld1(50000000);

// console.log(pop1, pop2, pop3);

const percentageOfWorld2 = function (population) {
    return (population / 7900000000) * 100;
}
const pop1 = percentageOfWorld2(1441000000);
const pop2 = percentageOfWorld2(3000000);
const pop3 = percentageOfWorld2(50000000);

// console.log(pop1, pop2, pop3);

 const calcAge3 = birthYear => 2037 - birthYear; //no need for curly brackets or return
const age3 = calcAge3(1991);
console.log(age3); 

c
const pop4 = percentageOfWorld3(1441000000);
console.log(pop4); 



function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) { //paremeters get defined when function is called
    const applePieces = cutPieces(apples);  //becomes argument for cutFruitPieces parameter
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice; // returns the result of this function
}
console.log(fruitProcessor(2, 3));


const percentageOfWorld1 = function (population) {
    return (population / 7900000000) * 100;
};

const describePopulation = function (country, population) {
    const countryPop = percentageOfWorld1(population);
    const popDescript = `${country} has ${population} people, which is about ${countryPop}% of the worlds population`;
    console.log(popDescript);


}

describePopulation('China', 1441000000);
describePopulation('Portugal', 10000000);
describePopulation('USA', 332000000);



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement; // return statement immediately returns
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }


    return retirement;

}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


const calcAge3 = birthYear => 2037 - birthYear; //no need for curly brackets or return
const age3 = calcAge3(1991);
console.log(age3); 

const calcAverage = (a, b, c) => ((a + b + c) / 3);

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinners = function (scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= scoreKoalas * 2) {
        console.log(`Dolphins are the winners. ${scoreDolphins} v ${scoreKoalas}`);
    } else if (scoreKoalas >= scoreDolphins * 2) {
        console.log(`Koalas are the winners. ${scoreKoalas} v ${scoreDolphins}`);
    } else {
        console.log(`no one wins`);
    }

}
checkWinners(scoreDolphins, scoreKoalas); 

const kilometerToMiles = kilometers => kilometers * 0.621;
console.log(kilometerToMiles(2)); 

//array is like a big container or data structure. It can store lots of variables.
// objects are another important data structure

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; //literal syntax
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020); //creating array using array function

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); //.length is a property
console.log(friends[friends.length - 1]); //expression produces a value. Give you last index

friends[2] = 'Jay'; //arrays are not premitive: they are immutable.
console.log(friends);


const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991,
    'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise

function calcAge1(birthYear) { //parameter is like a local variable
    return 2037 - birthYear; //takes value out of function
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages); 

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}

const populations = [4000000, 80000000, 5000000, 2000000];

if (populations.length = 4) {
    console.log(true);
} else {
    console.log(false);
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages); 

//methods are like array operations

const friends = ['Michael', 'Steven', 'Peter'];

//add elements
const newLength = friends.push('Jay'); //push is a method/function. It's attached to the friends array here
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop();
const popped = friends.pop(); // last
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


const neighbours = ['Scotland', 'Wales', 'England'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop('Utopia');
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log('includes Germany');
} else {
    console.log('Probably not a central European Country :D');
}

console.log(neighbours.indexOf('Scotland'));

neighbours[0] = 'Republic of Scotland';
console.log(neighbours); 

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips); */

//objects- another data structure

const jonasArray = [
    'Jonas',
    'Schedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];


const myCountry = {
    country: 'Ireland',
    capital: 'Dublin',
    language: 'English',
    population: 4000000,
    neighbours: ['Northern Ireland', 'England', 'Scotland', 'Wales']
};
//DOT VS Bracket notation


const jonas = {   //object with 5 key value pairs. Keys also called properties
    firstName: 'Jonas', //property firstName with value 'Jonas'
    lastName: 'Schedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName); // . is an operator
console.log(jonas['lastName']); //values of operations can be put in here

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about
 Jonas? Choose between firstName, lastName, age, job, and friends`);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`);
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

//Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best
friend is called ${jonas.friends[0]}`);































