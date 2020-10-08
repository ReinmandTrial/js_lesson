
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
console.log(debbiAge)

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