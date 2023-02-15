// Class exercise 1
function calculate(x, y, callback) {
    callback(x,y);
}

function addition(x, y) {
    return log(x + y);
}

function multiply(x, y) {
    return log(x * y);
}

function substract(x, y) {
    return log(x - y);
}

function divide(x, y) {

    return log(x  / y);
}

function log(message) {
    console.log(message);
}