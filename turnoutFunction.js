// Дан объект:
// let user = { name: 'Tom', age: 20, isMarried: false }
// Cформировать массив строк вида "имя_поля - значение_поля":
// ['name - Tom', 'age - 20', 'isMarried - false']
// Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in
let user = { name: 'Tom', age: 20, isMarried: false };
let arrObj = [];
for (let res in user) {
    arrObj.push(`${res} - ${user[res]}`);
}
console.log(arrObj);







// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.
// Доработать задание 2.1 с проверкой на вызов функции без аргументов или с одним аргументом.
// sum(1)// введите два параметра
// sum() // введите два параметра
function sum (a, b) {
    if (arguments.length < 2) {
        console.log('введите 2 числа');
    } else if (typeof a == typeof 1 && typeof b == typeof 1){
        console.log(a + b);
    } else {
        console.log('введите числа');
    }
}
sum (1, 2);










// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let find = (a) => {
    if (a < 0 || a > 10) {
        console.log(`число должно находиться в диапозоне от 1 до 10`);
        find(Number(prompt()));
    } 
    let random = getRandomInteger(1, 10)
    if (a == random) {
        console.log(`вы выйграли`);
    } else {
        console.log(`Вы не угадали, ваше число - ${a},  а выпало число ${random}`)
    }
}
find (Number(prompt()));









//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
arrCopy = [1, 2, 3, 4];
console.log(arrCopy);
let copy = function copyArr(arr) {
    return arr.map(num => num);
}
copy(arrCopy);





// На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).
let ul = document.querySelector('ul');
let a = document.querySelectorAll('li');
let arrNumbers = [];
for (let value of a) {
    if (value.innerText % 2 == 0) {
        arrNumbers.push(value.innerText);
    }
}
arrNumbers.forEach (list => {
    let li = document.createElement('li');
    li.innerText = list;
    ul.appendChild(li);
});







// Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option). Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li. Для добавления можно использовать функцию setInterval
// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.
let form = document.createElement('form');
form.setAttribute('action', '#');
form.setAttribute('method', '#');

let input = document.createElement('input');
input.setAttribute('type', 'text');

let select = document.createElement('select');
document.body.appendChild(form);
for (let i = 0; i <= 10; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
}

form.appendChild(input);
form.appendChild(select);

let ul = document.createElement('ul');
document.body.appendChild(ul);
let timerId = setInterval(() => {
    let li = document.createElement('li');
    li.innerText = 'good morning';
    ul.appendChild(li);
} , 1000);

setTimeout(() => { clearInterval(timerId)}, 5000);
