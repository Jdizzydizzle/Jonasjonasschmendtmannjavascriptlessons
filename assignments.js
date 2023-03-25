
/*const country = "Ireland";
let continent = "Europe";
let population = 130000000;
const isIsland = true;
const language = "English";
// population++;
const FinlanPopulation = 6000000;
const AvPopulation = 33000000;
const description = 'Portugal is in Europe, and its 11 million people speak Portugese';

if (population > 33000000) {
    console.log('Irelands population is above average');
} else {
    console.log(`Irelands population is ${33000000 - population} below average`);
}

console.log(`${country} is in ${continent}, and its ${population} people speak ${language} `);
console.log(language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

console.log(population);
console.log(population < AvPopulation); */


/*const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsheight = 1.95; */

const marksMass = 95;
const marksHeight = 1.88;
const johnsMass = 85;
const johnsheight = 1.76;

const MarksBMI = marksMass / (marksHeight * marksHeight);
console.log(MarksBMI);

const JohnsBMI = johnsMass / (johnsheight * johnsheight);
console.log(JohnsBMI);

let markHigherBMI = MarksBMI > JohnsBMI;
console.log(MarksBMI, JohnsBMI, markHigherBMI);

if (MarksBMI > JohnsBMI) {
    console.log(`Mark's BMI ${MarksBMI} is higher than Johns BMI ${JohnsBMI}!`);
}
else {
    console.log(`John's BMI ${JohnsBMI} is higher than Marks BMI ${JohnsBMI}!`);
}

















