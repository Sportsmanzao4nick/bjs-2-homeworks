
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
  let percentNumber = Number(percent);
  let contributionNumber = Number(contribution);
  let amountNumber = Number(amount);
  let dateNowNumber = Number(new Date ());

  if (isNaN(percentNumber)) {
    alert(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
    return;
  }
  if (isNaN(contributionNumber)) {
    alert(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
    return;
  }
  if (isNaN(amountNumber)) {
    alert(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
    return;
  }
  if (isNaN(date)) {
    alert(`Параметр "Дата" содержит неправильное значение "${date}"`);
    return;
  }
  if (isNaN(dateNowNumber)) {
    alert(`Параметр "Дата" содержит неправильное значение "${date}"`);
    return;
  }  
   
  let s = amountNumber - contributionNumber;  
  let n = Math.trunc((date - dateNowNumber) / (1000 * 60 * 60 * 24 * 30));
  let p = percentNumber / 100 / 12;
  let mounthAmount = s * (p + (p / (((1+p)**n) - 1)));
  let totalAmount = Number((mounthAmount * n).toFixed(2));   
  return totalAmount;
}
