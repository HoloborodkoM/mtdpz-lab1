"use strict"

console.log("Which mode do you wanna use?");
process.stdout.write("Interactive or non-interactive (press 1|2 respectively): ");

let index = 0;

process.stdin.on('data', checkAnswer);

function checkAnswer(answer) {

   const enteringValue = answer.toString().trim();

   if (enteringValue === '1') {
      interactive(enteringValue);
   } else if(enteringValue === '2') {
      nonInteractive();
   } else {

      console.log("Invalid input!!! Try again.");
      process.stdout.write("Interactive or non-interactive (press 1|2 respectively): ");

   }

}

const interactive = (value) => {
     
   const enteredParameters = {};
   const parameters = ['a', 'b', 'c'];

   function parametersInitialization() {
      process.stdout.write(`${parameters[index]} = `);
      index++;
   }
   
   enteredParameters[parameters[index]] = value;
   console.log(enteredParameters);

   if (parameters.length > index) {
      parametersInitialization();
   } else {
      console.log("Done:", enteredParameters);
      process.exit();
   }
     
}

const nonInteractive = () => {
   process.exit();
}