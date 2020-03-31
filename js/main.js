'use strict';

// Доход за месяц
let money = 20000; 
// Вывод типа данных переменной money
console.log (typeof money);
// Дополнительный доход
let income = 'ютуб';
// Вывод типа данных переменной income
console.log(typeof income);
// Дополнительные расходы
let addExpenses = 'еда, одежда, развлечения';
//  Вывод длинны строки
console.log(addExpenses.length);
// Привод строки к нижнему регистру
console.log(addExpenses.toLowerCase());
// Вывод строки в виде массива
console.log(addExpenses.split(', '));
// Булевое значение
let deposit = true;
// Вывод типа данных переменной deposit
console.log(typeof deposit);
// Сумма которую надо накопить
let mission = 200000;
// Число от 1 до 12
let period = 12;
//Вывод  “Период равен (period) месяцев” 
console.log('Период равен ' + period +' месяцев');
// Объявление переменной budgetDay
let budgetDay;
// Дневной бюджет
budgetDay = money/30;
console.log(budgetDay);

// Тут начинается 3 урок

// 1 Спрашиваем ежемесячный доход
money = prompt('Ваш месячный доход?');
console.log(money);

//  Спрашиваем возможные расходы
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

// Спрашиваем Есть ли у вас депозит в банке?
deposit = confirm('Есть ли у вас депозит в банке?');

// Спрашиваю у пользователя 2 раза по 2 вопроса и записываю их в разные переменные
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');

// Бюджет на месяц
let budgetMonth = money - (amount1 - amount2);
console.log('Бюджет на месяц', budgetMonth)

//Рассчёт количества  месяцев для достижения цели
console.log('цель будет достигнута за ', Math.floor(mission / budgetMonth),' месяца(ев)');

// Рассчёт дневного бюджета, учитывая бюджет на месяц 
budgetDay = money / budgetMonth;

// Вывод в консоль дневного бюджета с округлением
console.log('Бюджет на день', Math.floor(budgetDay));

if (budgetDay >= 1200) console.log('У вас высокий уровень дохода');
if (budgetDay >= 600 && budgetDay <= 1200) console.log('У вас средний уровень дохода');
if (budgetDay <= 600) console.log('К сожалению у вас уровень дохода ниже среднего');
if (budgetDay <= 0) console.log('Что то пошло не так');
