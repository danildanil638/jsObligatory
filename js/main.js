'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};


let money,
    income = 'ютуб',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 200000,
    period = 12;

let start = function () {
  do {
    money = prompt('Ваш месячный доход');
  }
  while (!isNumber(money));
};

start();

let showTypeOf = function (item) {
  console.log(typeof item);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(','));

//Вывод  “Период равен (period) месяцев” 
console.log('Период равен ' + period +' месяцев');
// Объявление переменной budgetDay

let expenses = [];

let getExpensesMonth = function(){
  let sum;
  let sum2 = 0;

  for (let i = 0; i < 2; i++) {
  
    expenses[i] = prompt('Введите обязательную статью расходов?');
    do {
      sum = prompt('Во сколько это обойдётся');
    }
    while (!isNumber(sum));
    sum2 += +sum;
  }
  


  console.log(expenses);
  return sum2;
  
};
let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function () {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();


function getTargetMonth() {
  return (Math.ceil(mission / accumulatedMonth));
};
let res = getTargetMonth();
  
  if (res > 0 ) {
    console.log('цель будет достигнута за', res, ' месяца(ев)');
  } else
    console.log('Цель не будет достигнута');

let budgetDay;
budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день', Math.floor(budgetDay));
let getStatusIncome = function name() {
  if (budgetDay >= 1200) return ('У вас высокий уровень дохода');
  if (budgetDay >= 600 && budgetDay <= 1200) return ('У вас средний уровень дохода');
  if (budgetDay <= 600) return ('К сожалению у вас уровень дохода ниже среднего');
  if (budgetDay <= 0) return ('Что то пошло не так');
};
console.log(getStatusIncome());
