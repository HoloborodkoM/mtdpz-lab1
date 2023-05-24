'use strict';

const solution = require('./solution.js');

const enteredParameters = {};
const parameters = ['a', 'b', 'c'];
let index = 0;

const interactive = () => {

   const currentHandler = process.stdin.listeners('data')[0];
   process.stdin.off('data', currentHandler);
   
   process.stdin.on('data', getForInteractive);

   parametersInitialization();
}

function parametersInitialization() {
   process.stdout.write(`${parameters[index]} = `);
}

function getForInteractive(data) {
      
   const enteringValue = data.toString().trim();
   const value = Number(enteringValue);

   if (Number.isNaN(value) || enteringValue === '') {
      console.log(`Error. Expected a valid real number, got ${enteringValue} instead!!!`);
      console.log("Try input parameter again:");
   } else if (index === 0 && value === 0) {
      console.log("Error. Parameter 'a' cannot be 0(zero)!!!");
      console.log("Try input parameter again:");
   } else {
      enteredParameters[parameters[index]] = value;
      index++;
   }

   if (parameters.length > index) {
      parametersInitialization();
   } else {
      const { a, b, c } = solution.getParameters(enteredParameters);
      solution.solve(a, b, c);
      process.exit();
   }

}

module.exports = interactive;