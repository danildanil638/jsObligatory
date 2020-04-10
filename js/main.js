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
  expenses: {},
  addExpenses: [],
  deposit: false,
  pescentDeposit: 0,
  moneyDeposit: 0,
  mission: 200000,
  period: 12,
  asking: function() {

    if(confirm('есть ли у вас дополнительный зароботок?')){
      let itemIncome
      do {
        itemIncome = prompt('Какой у вас есть дополнительный зароботок? ', 'таксую')
      }
      while (isNumber(itemIncome));

      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц зарабатываете на этом? ', 10000);
      }
      while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    };



   let addExpenses;
   do {
     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, таблетки');
   }
   while (isNumber(addExpenses));
   




      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      let sum;
      let expenses;
      do {
        expenses = prompt('Введите обязательную статью расходов?', 'еда');
      }
      while (isNumber(expenses));
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
  },
  getInfoDeposit: function() {
    if(appData.deposit){
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      }
      while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена', 10000);
      }
      while (!isNumber(appData.moneyDeposit));
      
    }
  },
  calcSavedMoney: function (){
   return appData.budgetMonth * appData.period;
    
  }


};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
console.log('Период равен ' + appData.period + ' месяцев');
let res = appData.getTargetMonth();
if (res > 0) {
  console.log('цель будет достигнута за', res, ' месяц(ев)');
} else {
  console.log('Цель не будет достигнута');
}
console.log('Расходы за месяц: ' + appData.expensesMonth);

for (let key in appData) {
  console.log( 'наша программа включает в себя данные:', 'Свойство ' + key + ' значение: ' + appData[key]);
  if (key === 'expenses') {
    for (let key in appData.expenses) {
      console.log('ответ на первый вопрос: еда' + key + ' его значение: ' + appData.expenses[key]);
    }
  }
  if (key === 'income') {
    for (let key in appData.income) {
      console.log( key +'значение: '+ appData.income[key]);
    }
  }
}

console.log(appData.addExpenses.join(','));