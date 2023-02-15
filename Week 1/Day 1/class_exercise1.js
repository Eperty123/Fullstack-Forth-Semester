const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function greeting(name) {
    console.log(`Hello, ${name}!`);
    readline.close();
  }
  
  function processUserInput(callback) {
    readline.question(`What's your name? `, callback);
  }
  
  // Exercise 1.2 + 1.3
  processUserInput((name) => {
    greeting(name.toUpperCase()),
    greeting(name + " (" + name.length + ")")
  });