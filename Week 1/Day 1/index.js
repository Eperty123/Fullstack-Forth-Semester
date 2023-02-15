
// Create multiplier
function createMultiplier(y) {
    return x => x * y;
}

const timesTwo = createMultiplier(2);
console.log(timesTwo);

// Callbacks
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.map(x=> x **2));

function map(array, mapFunc) {
    const mapArr = [];

    for(let i = 0; i < array.length;i++) {
        const result = mapFunc(array[i],i);
        mapArr.push(result);
    }

    return mapArr;
}

const t = map(numbers, (num) => num * 6);
//console.log(t);

function customFilter(array, mapFunc) {
    const mapArr = [];

    for(let i = 0; i < array.length;i++) {
        const result = mapFunc(array[i],i);
        if(result) mapArr.push(array[i]);
    }

    return mapArr;
}

const t1 = customFilter(numbers, (x => (x != 0 && x > 1)));
console.log(t1);



const red = (arr, reduceFunc, initValue) => {
    let sum = initValue;
    for(let i = 0; i < arr.length; i++) {
        sum = reduceFunc(sum, arr[i]);
    }

    return sum;
}

console.log(red(numbers, (sum, num) => sum + num, 0 ));
console.log(red(numbers, (sum, num) => sum * num, 1 ));