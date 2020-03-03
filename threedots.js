const age = [34, 87, 34, 53, 54];
const age2 = [54, 74, 85, 83, 74];
const age3 = [54, 89, 45, 87, 34];
const allAges = age.concat(age2).concat([2]).concat(age3);
// console.log(allAges);

const allAges2 = [...age, ...age2, 2, ...age3];
// console.log(allAges2);

const business = 534;
const minister = 533;
const shochib = 343;
const maxi = Math.max(business, minister, shochib);
const maximum = [534,533,587];
const takaPaisa = Math.max(...maximum);
console.log(takaPaisa);
// console.log(maxi);