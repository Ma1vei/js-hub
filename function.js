// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
//}
let i = 0;
while (i < 3){
    i++;
    alert(`number ${i}!`);
}







// Перепишите код с использованием тернарного оператора
// let male = true;
// let gender;
// if (male) {
// gender = 'man';
// } else{
// gender = 'woman'
// }
let male = true;
let gender = male ? 'man' : 'woman';
console.log(gender);







// Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
// [true, false]
// должно получиться
// [{ gender: 'man' }, { gender: 'woman' }]
let arr = [true, false, false, true, true];
let obj = [];
for (let i = 0; i < arr.length; i++) {

    let gender = arr[i] ? 'man' : 'woman';
    obj.push({gender});
console.log(obj);





// Создайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.
let arr1 = [5, 4, 3, -3, -10, -1, 8, -20, 0];
function findPositiveNumbers(arr1) {
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            arr2.push(arr1[i]);
        }
    }
    return arr2;
}
findPositiveNumbers(arr1);










// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']
function arr(a, b) {
    let arr = [];
    for (let i = 0; i < b; i++) {
        arr.push(a);
    }
    console.log(arr);
}
arr('a', 3);








// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
filterFor(arr, 5);







//Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function random() {
    console.log(`rgb ( ${getRandomInteger(0, 225)}, ${getRandomInteger(0, 225)}, ${getRandomInteger(0, 225)} )`);
}

random();







// Написать функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат (!!! решить без оператора **)
function pow(x, n) {
    let a = x; 
    for(let i = 1; i < n; i++) {
        a *= x;
    }
    console.log(a);
}
pow(3, 3);







//Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false
function islnteger(x) {
    if (x % 1 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
islnteger(35.1);








// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0,5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"
function forisl (n){
    for(let i = 1; i < n; i += 0.5) {
        if ((i % 1) == 0) {
            console.log(`${i} integer`);
        } else {
            console.log(`${i} decimal`);
        }
    }
}
forisl (Number(prompt()));
