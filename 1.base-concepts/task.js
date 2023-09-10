"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if(d === 0){
    arr.push(-b/(2*a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  };
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   Number(percent);
   Number(contribution);
   Number(amount);
   Number(countMonths);

   if ((typeof(percent) != 'number') || (Number.isNaN(percent)) || (typeof(contribution) != 'number') || (Number.isNaN(contribution)) || (typeof(amount) != 'number') || (Number.isNaN(amount)) || (typeof(countMonths) != 'number') || (Number.isNaN(countMonths))) {
     return false;
   } else {
    let P = percent/100/12; 
    let S = amount - contribution; 
    let creditSum = S * (P + (P / (((1 + P)**countMonths) - 1)));
    let sumAll = Number((creditSum * countMonths).toFixed(2));
   
    return sumAll;
 }
}

