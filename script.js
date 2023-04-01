/* let js = 'amazing';
 console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);


// variable name conventions
let firstname = "Matilda";
console.log(firstname);
console.log(firstname);
console.log(firstname);

 let myfirstjob = "coder";
console.log(myfirstjob);
*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthyear = 1991;
//birthyear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';
*/

// math operators

/* console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3); */
// means 2 to the power of 3 which is equals to 2*2*2

// assignment operators
//const firstname = 'jonas';
//const lastname = 'Schmedtmann';
// console.log(firstname + ' ' + lastname);

/* let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x*4 = 100
x++; // x + 1
x--;
// x--;
console.log(x);

// comparison operators

console.log(ageJonas > ageSarah); // >, <, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x=y=20 //x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge); */
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthyear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthyear) + ' year old '
    + job + '!';
// console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthyear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`);

// console.log('String with \n\
// multiple \n\
// lines');

console.log(`String with
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving licence🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const birthyear = 2012;

let century;
if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old'); //number converted to string by + operator
console.log('23' + '10' + 3);
console.log('23' / '2');

let n = '1' + 1; //'11'
n = n - 1; //10
console.log(n);

// 5 falsy values; 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); //empty object
console.log(Boolean(''));

const money = 100;
if (money) { //js tries to convert what's here into a boolean, 0 is a falsy value
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
 */
/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive...');
} 

const speaksEnglish = true;
const population = 6000000;
const notAnIsland = true;

if (speaksEnglish && population < 5000000 && notAnIsland) {
    console.log('Sarah should live in Ireland')
} else {
    console.log('Ireland does not meet your criteria');
} 


const avDScore = (96 + 108 + 89) / 3;
const avKScore = (88 + 91 + 110) / 3;
console.log(avDScore, avKScore);

if (avDScore > avKScore && avDScore > 100) {
    console.log('Dolphins win');
} else if (avKScore > avDScore && avKScore > 100) {
    console.log('Kowlas win');
} else if (avDScore === avKScore && avDScore > 100 && avKScore > 100) {
    console.log('draw');
} else {
    console.log('minimum score not reached')
}

const avDScore = (97 + 112 + 80) / 3;
const avKScore = (109 + 95 + 50) / 3;
console.log(avDScore, avKScore);

if (avDScore > avKScore && avDScore >= 100) {
    console.log('Dolphins win');
} else if (avKScore > avDScore && avKScore >= 100) {
    console.log('Kowlas win');
} else if (avDScore === avKScore && avDScore >= 100 && avKScore >= 100) {
    console.log('draw');
} else {
    console.log('minimum score not reached')
}


const day = 'Monday';

switch (day) {
    case 'Monday': // day === 'Monday'
        console.log('Plan my course structure');
        console.log('Go to coding meet up');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}


const day = 'Monday';
if (day === 'Monday') {
    console.log('Plan my course structure', 'Go to coding meet up');
} else if (day === 'Tuesday') {
    console.log('Prepare theory vidoes');
} else if (day === 'Wednesday' || 'Thursday') {
    console.log('Write code example')
} else if (day === 'Friday') {
    console.log('Record videos')
} else if (day === 'Saturday' || 'Sunday') {
    console.log('Enjoy the weekend')
} else console.log('not a valid day'); 

3 + 4 // is an expression because it produces a value
1991 //is an expression because it produces a value
true && false && !false // expressions because they produce boolean values
//sequence of actions = a statement 
// in template literal one can only insert expressions but not statements

// const me = 'John'
// console.log(`I'm ${2037 - 1991} years old ${me}`);

//terninary operators

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 💦'); //an operator always produces a value: it's an expression

const drink = age >= 18 ? 'wine 🍷' : 'water 💦'; //drink is defined conditionally
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💦';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`); */

bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
was ${bill + tip}`);

