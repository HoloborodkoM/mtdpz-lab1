"use strict"

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

const interactive = () => {

   const enteredParameters = {};
   const parameters = ['a', 'b', 'c'];
   let index = 0;

   process.stdin.removeListener('data', checkAnswer);
   
   function parametersInitialization() {
      process.stdout.write(`${parameters[index]} = `);
   }

   process.stdin.on('data', getForInteractive);

   function getForInteractive(data) {
      
      const enteringValue = data.toString().trim();
      const value = parseFloat(enteringValue);

      if (Number.isNaN(value)) {

         console.log(`Error. Expected a valid real number, got ${enteringValue} instead!!!`);
         console.log("Try input parameter again:");

      } else {

         enteredParameters[parameters[index]] = value;
         index++;
         console.log(enteredParameters);

      }
   
      if (parameters.length > index) {
         parametersInitialization();
      } else {
         
         console.log("Done:", enteredParameters);
         process.exit();
      }
   }

   parametersInitialization()
}

const nonInteractive = () => {
   process.exit();
}