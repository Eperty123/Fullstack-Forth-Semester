function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function operateOnNumbers(operator, x, y) {
    return operator(x, y);
  }

  
  let numbers = [1,2];
  function arrayOperation(array, callback1, callback2) {
    let emptyArr = [];

    for(let i = 0; i < array.length;i++) {
        let currElement = array[i];
        let result = callback1(currElement, currElement);
        result = callback2(result, currElement);
        emptyArr.push(result);
    }

    return emptyArr;
  }
  
  console.log(operateOnNumbers(add, 3, 4));   // 7
  console.log(operateOnNumbers(multiply, 3, 4));   // 12
  console.log(operateOnNumbers(multiply, 3, 4));   // 12

  // Exercise 2.2
  console.log(operateOnNumbers((x, y) => x / y, 3, 4));   // 0,75

  // Exercise 2.3
  console.log(arrayOperation(numbers, add, multiply))