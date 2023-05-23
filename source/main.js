"use strict"

const fs = require('fs');
const path = require('path');

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
      
      const enteringValue = data.toString().trim().replace(/,/g, '.');
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

         const { a, b, c } = getParams(enteredParameters);
         solve(a, b, c);
         process.exit();
      }
   }

   parametersInitialization();
}

const nonInteractive = () => {

   const enteredParameters = {};
   const parameters = ['a', 'b', 'c'];
   let index = 0;

   process.stdin.removeListener('data', checkAnswer);

   function parametersForFile() {
      process.stdout.write("Enter name or path file: ");
   }
   
   process.stdin.on('data', getForNonInteractive);

   function getForNonInteractive(data) {

      const filePath = data.toString().trim();
      let contentFile;

      try {
         contentFile = fs.readFileSync(filePath, 'utf8');
      } catch {
         throw new Error("No such file or path!!!");
      }

      const result = contentFile.trim().replace(/,/g, '.').split(' ');
      const fileExtension = path.extname(filePath);

      if (fileExtension !== '.txt') {
         throw new Error("Error. Invalid file format!!!");
      }

      if (result.length !== parameters.length) {
         throw new Error("Error. File does not match the conditions!!!");
      }
      
      for (const checkParameter of result) {

      const value = Number(checkParameter);

      if (Number.isNaN(value)) {
         throw new Error("Error. Invalid value in file!!!");
      } else if (index === 0 && value === 0) {
         throw new Error("Error. Parameter 'a' connot be 0(zero)!!!");
      } else {

         enteredParameters[parameters[index]] = value;
         index++;

      }
      
      if (parameters.length === index) {

         const { a, b, c } = getParams(enteredParameters);
         solve(a, b, c);
         process.exit();

      }

      }
   }

   parametersForFile()
}

const solve = (a, b, c) => {
   console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`)
   const discriminant = Math.pow(b,2) - 4*a*c;
   
   if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
      console.log(`There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`);
   } else if (discriminant === 0) {
      const x = -b / (2*a);
      console.log(`There are 1 root\nx = ${x}`);
   } else {
      console.log("There are 0 root");
   }
}

const getParams = (object) => {
   const a = object.a;
   const b = object.b;
   const c = object.c;

   return {a, b, c}
}