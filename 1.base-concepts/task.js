
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
    
  if (typeof percent === 'string') {
    percent = Number(percent);    
  }
  else if (typeof percent !== 'number') {
    percent = 'Параметр процент содержит неправильное значение <значение параметра>';
    return percent;
  }
  if (typeof contribution === 'string') {
    percent = Number(contribution);    
  }
  else if (typeof contribution !== 'number') {
    contribution = 'Параметр процент содержит неправильное значение <значение параметра>';
    return contribution;
  }
  if (typeof amount === 'string') {
    amount = Number(amount);    
  }
  else if (typeof percent !== 'number') {
    amount = 'Параметр процент содержит неправильное значение <значение параметра>';
    return amount;
  }
  if (typeof date === 'string') {
    date = Number(date);    
  }
  else if (typeof date !== 'number') {
    date = 'Параметр процент содержит неправильное значение <значение параметра>';
    return date;
  };
  
  let s = amount - contribution;
  let now = new Date ();
  let n = (date.getFullYear() - now.getFullYear()) * 12;  
  let p = (percent/100)/12;
  let mounthAmount = s * (p + (p / (((1+p)**n) - 1)));
  let total = mounthAmount * n;
  let totalAmount = total.toFixed(2);
  return totalAmount;
}
