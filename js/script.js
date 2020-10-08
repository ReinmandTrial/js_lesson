
// ! Используем строгий режим
"use strict"

// ! Выводим первую фразу в консоль,: Я учу JS
console.log('Я учу JS');

// ! Делаем первую переменную через ключевое слово let
// ! и выводим её в консоль
let denis = 'Фрилансер по жизни';
console.log(denis + ', даёт уроки');

// ! Делаем много переменных через запятую удобно для написания
// ! И выводим их в консоль
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
// ! И выводим в консоль
const userProfile = {
    name: 'Maksym',
    age: 21,
    message: 'Выиграет сильнейший',
}
console.log(userProfile);
// ! Заменили в предыдущем часть константы
// ! И вывели её в консоль
userProfile.name = 'sergey';
console.log(userProfile);

// ! Вывели в консоль используя var (устаревшее ключевое слов)
var water = 'sahara'
console.log(water)

// !  Делаем ДЗ, где условия:
/*      1. Сделать две переменные user и userName
        2. userName задать значение 'Вася'
        3. user задать значение userName
        4. Вывести в консоль user и получить в консоле 'Вася'
*/
let user = '',
    userName = 'Вася';
user = userName;
console.log(user);