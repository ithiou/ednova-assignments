  const readline = require('node:readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //return Math.random() * (max - min) + min;
  }
  
const minRange = 1; 
const maxRange = 100; 
const randomNumber = generateRandomNumber(minRange, maxRange); 
let attempts = 0; 

console.log('Welcome to the Guess the Number Game!')
console.log(`Please enter a number within the range ${minRange} -- ${maxRange} :`);

function processGuess(playerGuess) {
    attempts++; 
  
    if (playerGuess < randomNumber) {
      return "Too low.";
    } else if (playerGuess > randomNumber) {
      return "Too high.";
    } else {
      return `Congratulation you guess the right number ${randomNumber} in ${attempts} attemps.`;
    }
  }

  function playGame() {
    rl.question("Please enter a number within the range : ", (input) => {
      const playerGuess = parseInt(input, 10); 
  
      if (isNaN(playerGuess)) {
        console.log(`Welcome to the Guess the Number Game!`);
      } else if (playerGuess < minRange || playerGuess > maxRange) {
        console.log(`The muust in range ${minRange} -- ${maxRange}.`);
      } else {
        const feedback = processGuess(playerGuess);
        console.log(feedback);
  
        if (playerGuess === randomNumber) {
          rl.close(); 
          return;
        }
      }
  
      
      playGame();
    });
  }