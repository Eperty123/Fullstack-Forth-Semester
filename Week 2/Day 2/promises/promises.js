// Class exercise 2
function calculate(x, y, callback) {
    return new Promise((resolve, reject) => {
        try {
            log(callback(x,y));
            resolve(callback(x,y));
        }
        catch(e) {
            reject(callback(x.y));
            log(e.message);
        }
    })
}

function addition(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function substract(x, y) {
    return x - y;
}

function divide(x, y) {

    return x  / y;
}

function log(message) {
    console.log(message);
}

async function calculateAsync (x, y, callback) {
    await calculate(x,y, callback);
    
}

// The then() method is only available for functions/methods that return a Promise.
// 
// calculate(5,2, addition)
//     .then(res => calculate(res, 2, multiply)) // 14
//     .then(res => calculate(res, 2, substract)) // 12
//     .then(res => calculate(res, 2, divide)) // 6
// ;

// TODO: Fix async and make the remaining class exercises.
const res = await calculateAsync(5,2, addition);
    // res =
    // .then(res => calculate(res, 2, multiply)) // 14
    // .then(res => calculate(res, 2, substract)) // 12
    // .then(res => calculate(res, 2, divide)) // 6
;