
function solveEquation(a, b, c) {
  'use strict'
  let arr = [];
  let D = (b ** 2) - (4 * a * c);
  let x1, x2;  

  if (D === 0) {
    x1 = -b/(2*a);
    arr.push(x1);
  } 
  else if ( D > 0) {
    x1 = (-b + Math.sqrt(D) )/(2*a);
    x2 = (-b - Math.sqrt(D) )/(2*a);
    arr.push(x1, x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict' 
  if (isNaN(percent)) {
    alert(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
    return;
  }
  if (isNaN(contribution)) {
    alert(`Параметр "Процентная ставка" содержит неправильное значение "${contribution}"`);
    return;
  }
  if (isNaN(amount)) {
    alert(`Параметр "Процентная ставка" содержит неправильное значение "${amount}"`);
    return;
  }
  if (isNaN(date)) {
    alert(`Параметр "Процентная ставка" содержит неправильное значение "${date}"`);
    return;
  }    
   
  let s = Number(amount) - Number(contribution);
  let now = Number(new Date ());  
  let n = Math.trunc((date - now) / (1000 * 60 * 60 * 24 * 30));
  let p = (Number(percent)/100)/12;
  let mounthAmount = s * (p + (p / (((1+p)**n) - 1)));
  let totalAmount = (mounthAmount * n).toFixed(2);   
  return totalAmount;
}
