'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
let money,
    start = function() {
      do {
        money = prompt('Ваш месячный доход', '50000');
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
   let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, таблетки');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      let sum;
      let expenses;

      expenses = prompt('Введите обязательную статью расходов?', 'еда' );
      do {
        sum = prompt('Во сколько это обойдётся', '4500');
      }
      while (!isNumber(sum));
      sum =+sum;
      appData.expenses[expenses] = sum;
    }
  },
  getExpensesMonth: function() {
      for (let key in appData.expenses) {
        console.log(key);
        appData.expensesMonth += +appData.expenses[key];
      }
    },
  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
  },
  getTargetMonth: function() {
    return (Math.ceil(appData.mission / appData.budgetMonth));
  },
  getStatusIncome: function() {
    if (appData.budgetDay >= 1200){
      console.log('У вас высокий уровень дохода')
    } else if(appData.budgetDay >= 600 && budgetDay < 1200){
      console.log('вас средний уровень дохода');
    } else if (appData.budgetDay < 600){
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay <= 0){
      console.log('Что то пошло не так');
    }
  }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
console.log('Период равен ' + appData.period + ' месяцев');
let res = appData.getTargetMonth();
if (res > 0) {
  console.log('цель будет достигнута за', res, ' месяц(ев)');
} else
console.log('Цель не будет достигнута');
console.log('Расходы за месяц: ' + appData.expensesMonth);

for (let key in appData) {
  console.log( 'наша программа включает в себя данные:', 'Свойство ' + key + ' значение: ' + appData[key]);
}
console.log(appData.expenses, appData.income);