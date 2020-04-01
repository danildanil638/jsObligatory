'use strict';

// Доход за месяц
let money = 20000; 
// Вывод типа данных переменной money
let income = 'ютуб';
// Вывод типа данных переменной income
let addExpenses = 'еда, одежда, развлечения';
//  Вывод длинны строки
console.log(addExpenses.length);
// Привод строки к нижнему регистру
console.log(addExpenses.toLowerCase());
// Вывод строки в виде массива
console.log(addExpenses.split(', '));
// Булевое значение
let deposit = true;
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
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');



// Начало 4 урока
// Вывод типов данных(по уроку)
let showTypeOf = function (data) {
  return(data, typeof (data));
};
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));


// Завернул рассчёт уровня дохода в функцию(по уроку) 
let getStatusIncome = function name() {
  if (budgetDay >= 1200) return('У вас высокий уровень дохода');
  if (budgetDay >= 600 && budgetDay <= 1200) return ('У вас средний уровень дохода');
  if (budgetDay <= 600) return ('К сожалению у вас уровень дохода ниже среднего');
  if (budgetDay <= 0) return ('Что то пошло не так');
};
console.log(getStatusIncome());



//1) Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(amount1, amount2) {
  return +amount1 + +amount2;
}
getExpensesMonth();
console.log(getExpensesMonth(amount1, amount2));

// 2)Функция возвращает Накопления за месяц (Доходы минус расходы)
let accumulatedMonth;
function getAccumulatedMonth(money, amount1, amount2) {

// 3) Результат вызова в переменную
 accumulatedMonth = +money - (+amount1 + +amount2);
 return accumulatedMonth;
}
getAccumulatedMonth();
console.log(getAccumulatedMonth(money, amount1, amount2));

//4) Функция Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления 

function getTargetMonth(mission, accumulatedMonth) {
  return (Math.ceil(mission / accumulatedMonth));
};
// Тут создал дополнительную переменную для работы
let res = getTargetMonth(mission, accumulatedMonth);
console.log('цель будет достигнута за', res, ' месяца(ев)');

// 5-6) Удалял  не нужный код.   и удалил переменную  budgetDay 
// Рассчёт дневного бюджета, учитывая бюджет на месяц 
budgetDay = accumulatedMonth / 30;

// Вывод в консоль дневного бюджета с округлением(перенёс сверху вниз)
console.log('Бюджет на день', Math.floor(budgetDay));
