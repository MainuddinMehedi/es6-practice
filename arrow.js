// function doubleIt(num){
//     return num * 2;
// }

// const result = doubleIt(19);
// console.log(result);

const doubleIt  = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(50);
const result2 = add(30, 50);
const result3 = doMath(7, 5);
console.log(result3)