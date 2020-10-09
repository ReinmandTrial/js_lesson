
// ! Используем строгий режим
"use strict"

// ! Выводим первую фразу в консоль,: Я учу JS
console.log('Я учу JS');

// ! Делаем первую переменную через ключевое слово let
// ! и выводим её в консоль
let denis = 'Фрилансер по жизни';
console.log(denis + ', даёт уроки');

// ! Делаем много переменных через запятую удобно для написания
// ! и выводим их в консоль
let myname = 'Maksym',
    coffiname = 'nescafe',
    pettyname = 'petty';
console.log(myname, coffiname, pettyname);

// ! Заменяем переменную debiAge на terryAge
// ! И выводим её в консоль
let debbiAge = '21';
let terryAge = '35';
debbiAge = terryAge;
console.log(debbiAge);

// ! В строке 31 задана переменная с значением 21, в строке 32 задан
// ! блок внутри которого задана эта же переменная с значением 18
// ! выводя их в консоль мы получаем вне блока и внутри блока разные
// ! значения
let myAge = '21'
function testBlock() {
    let myAge = 18;
    console.log(myAge);
}
testBlock();
console.log(myAge);

// ! Пишем первую константу(const) задаём ей массив значений
// ! и выводим в консоль
const userProfile = {
    name: 'Maksym',
    age: 21,
    message: 'Выиграет сильнейший',
}
console.log(userProfile);
// ! Заменили в предыдущем часть константы
// ! и вывели её в консоль
userProfile.name = 'sergey';
console.log(userProfile);

// ! Вывели в консоль используя var (устаревшее ключевое слов)
var water = 'sahara'
console.log(water)

// ! Делаем ДЗ, где условия:
/*      1. Сделать две переменные user и userName
        2. userName задать значение 'Вася'
        3. user задать значение userName
        4. Вывести в консоль user и получить в консоле 'Вася'
*/
let user = '',
    userName = 'Вася';
user = userName;
console.log(user);

// !!! ТИПЫ ДАННЫХ 

// ! Даём значение переменной, и выводим тип данных переменной 
// ! в консоль
let user_one;
console.log(typeof user_one);
user_one = "kirill";
console.log(typeof user_one);
user_one = 58;
console.log(typeof user_one);

// ! Значение undefined - неопределённый тип
// ! не даём переменной никакого значения и выводим в консоль
let user_two;
console.log(typeof user_two);
console.log(user_two);

// ! Проверка определена ли переменная
/*      Используем два оператора if и else, что переводится как
    если user_two = undefined, или во втором случае, если typeof
    (тип данных) = 'undefined', то нам выдаёт 'Переменная НЕ определена' */
// ! и выводим в консоль    
if (user_two === undefined) {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}
if (typeof user_two === 'undefined') {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}

// * Тип данный null означает ничего, пустое место.
// ! Обращаемся к значению блока без данных 
// ! и выводим в консоль, - получаем null, т.к. данных нет.
let block = document.querySelector('.block');
console.log(block);
console.log(typeof block);

// * Boolean - булевый тип, означает true or false
// ! Ты женишься на мне = правда и в консоль нам выдёт счастливый смайл
// ! если поменять на false, то в консоль выдаст грустный смайл(':(').
let willYouMarryMe = true;
if (willYouMarryMe) {
    console.log(':)');
} else
    console.log(':(');

// ! Применение Правда или Лож, если знак поменять, консоль покажет false
let trueOrFalse = 58 > 29;
console.log(trueOrFalse);

// * Работаем с числами, Number - число
/*      Включает в себя помимо number ещё и Infinity (бесконечность)
    и NaN (вычислительную ошибку), но Infinity и NaN - это тип данных
    Number. */
// ! Задаём в переменную тип данных число и получаем в консоле это число
// ! и тип данных Number 
let any__nomber = 21821;
console.log(any__nomber);
console.log(typeof any__nomber);
// ! Получаем в консоле бесконечность, если добавить - перед 58 получим
// ! в консоле -Infinity
let obama = 58 / 0;
console.log(obama);
// ! Получаем в консоле вычислительну ошибку NaN, т.к. пытаемся
// ! поделить строку на число.
let getNan = 'nan' / 58;
console.log(getNan);


// * BigInt - число, которое не может в себя вместить number
// ! Задаём значение переменной большим числом и выводим в консоль тип
let bit_ingener = 12345678901234565678901232192n;
console.log(typeof bit_ingener);

// * string - тип данных строка, она пишется в ковычках
// ! С помощью обратных ковычек используем доп функционал, присваиваем
// ! значение переменной и затем используем эту переменную внутри другой
// ! переменной и выводим в консоль информацию и тип переменной
let obamaAge = 36;
let obamaAgeInfo = `Возраст: ${obamaAge}`;
console.log(obamaAgeInfo);
console.log(typeof obamaAgeInfo);

// * object - сложынй тип данных, содержит набор свойств
// ! Пусть obamaInfo будет иметь следующие переменные с значениями
// ! и выводим их в консоль и выводим тип данных переменной.
let obamaInfo = {
    name: 'obama',
    age: 36
}
console.log(obamaInfo);
console.log(typeof obamaInfo);

// * Symbol - уникальный индетификатор object
// ! Даём идентификатор id - id 
// ! и выводим в консоль тип данных этой переменной
let id = Symbol('id');
console.log(typeof id);


// * function - функция, тоже самое, что и объект
let funcVariable = function name(params) {

}
console.log(typeof funcVariable);

// * Типы данных можно преобразовывать
// ! Даём значение переменной и затем переменную приравниваем к 
// ! другому типу данных, после чего выводим её в консоль и 
// ! получаем её с другим типом данных, где число стало строкой.
let myNewAge = 21;
console.log(myNewAge);
console.log(typeof meNewAge);
myNewAge = String(myNewAge);
console.log(myNewAge);
console.log(typeof myNewAge);