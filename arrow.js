// function doubleIt(num){
//     return num * 2
// }

// const doubleIt = function myFun(sum){
//     return sum * 2;
// }

const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

const add = (x, y) => x + y;
const addResult = add(50, 70);
console.log(addResult);

const give5 = () => 5;
const give = give5();
console.log(give);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const doResult = doMath(6, 4);
console.log(doResult);