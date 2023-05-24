'use strict';

const interactive = require('./source/interactive.js');
const nonInteractive = require('./source/non-interactive.js');

console.log("Which mode do you wanna use?");
process.stdout.write("Interactive or non-interactive (press 1|2 respectively): ");

process.stdin.on('data', checkAnswer);

function checkAnswer(answer) {

   const enteringValue = answer.toString().trim();

   if (enteringValue === '1') {
      interactive();
   } else if(enteringValue === '2') {
      nonInteractive();
   } else {
      console.log("Invalid input!!! Try again.");
      process.stdout.write("Interactive or non-interactive (press 1|2 respectively): ");
   }
   
}