'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
let money,
    start = function () {
      do {
        money = prompt('Ваш месячный доход');
      }
      while (!isNumber(money));
    };

start();

let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 200000,
  period: 12,
  asking: function() {
   let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
    let sum;
    let sum2 = 0;
    for (let i = 0; i < 2; i++) {

      appData.expenses[i] = prompt('Введите обязательную статью расходов?');
      do {
        sum = prompt('Во сколько это обойдётся');
      }
      while (!isNumber(sum));
      sum2 += +sum;
    }
    console.log(appData.expenses);
    return sum2;
  },
  getExpensesMonth: function () {
      for (let key in appData.expenses) {
        appData.expensesMonth = (key + sum);
      };
    },
  getAccumulatedMonth: function  () {
    return money - expensesAmount;
  },
  getTargetMonth: function () {
    return (Math.ceil(appData.mission / accumulatedMonth));
  },
  getStatusIncome: function () {
     if (budgetDay >= 1200) return ('У вас высокий уровень дохода');
     if (budgetDay >= 600 && budgetDay <= 1200) return ('У вас средний уровень дохода');
     if (budgetDay <= 600) return ('К сожалению у вас уровень дохода ниже среднего');
     if (budgetDay <= 0) return ('Что то пошло не так');
  }
};
  
appData.asking();





//Вывод  “Период равен (period) месяцев” 
console.log('Период равен ' + appData.period +' месяцев');
// Объявление переменной budgetDay
appData.expenses = [];
appData.expensesAmount = appData.expenses();
console.log('Расходы за месяц: ' + expensesAmount);
let accumulatedMonth = appData.getAccumulatedMonth();
let res = appData.getTargetMonth();
  if (res > 0 ) {
    console.log('цель будет достигнута за', res, ' месяца(ев)');
  } else
    console.log('Цель не будет достигнута');
let budgetDay;
budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день', Math.floor(budgetDay));
console.log(appData.getStatusIncome());
