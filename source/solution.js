'use strict';

const solve = (a, b, c) => {

   console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

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

const getParameters = (object) => {

   const a = object.a;
   const b = object.b;
   const c = object.c;

   return {a, b, c}
}

module.exports = {solve, getParameters};