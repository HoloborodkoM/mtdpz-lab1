'use strict';

const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');

const enteredParameters = {};
const parameters = ['a', 'b', 'c'];
let index = 0;

const nonInteractive = () => {

   const currentHandler = process.stdin.listeners('data')[0];
   process.stdin.off('data', currentHandler);
   
   process.stdin.on('data', getForNonInteractive);

   parametersForFile()
}

function parametersForFile() {
   process.stdout.write("Enter name or path file: ");
}

function getForNonInteractive(data) {

   const filePath = data.toString().trim();
   let contentFile;

   try {
      contentFile = fs.readFileSync(filePath, 'utf8');
   } catch {
      throw new Error("No such file or path!!!");
   }

   const result = contentFile.trim().split(' ');
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
         const { a, b, c } = solution.getParameters(enteredParameters);
         solution.solve(a, b, c);
         process.exit();
      }

   }
}

module.exports = nonInteractive;