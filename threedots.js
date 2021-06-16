const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2, 5]
// console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha);
console.log(maximum);