//Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
// const input = document.querySelector('input');
input1.addEventListener('keyup', function(event) {
    let li = document.createElement('li');
    li.innerText = event.key;
    document.querySelector('ul').appendChild(li);
});


// // Вставить в html теги input и div (просто предусмотреть в разметке). 
// // 1) Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)
// // 2) Каждый раз при изменении данных в инпуте, в предусмотренный div должна вписываться фраза "Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ".
const input = document.querySelector('input');
input.addEventListener('keyup', function(event) {
    console.log(input.value);
    document.querySelector('div').innerText = `Клиент набирает: ${input.value}`;
});



// //Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value).
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('.string');
    let li = document.createElement('li');
    li.innerText = input.value;
    document.querySelector('ul').appendChild(li);
    console.log(input.value);
    input.value = ''; 
});




// // Простой калькулятор
// // Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.
// // 1) решить с помощью if-else
// // 2) использовать для решения eval:
let form = document.querySelector('form');
let form = document.querySelector('form');
let ul = document.querySelector('ul');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let input1 = Number(document.querySelector('.firstnumber').value);
    let select = document.querySelector('select');
    let option = select.value;
    let input2 = Number(document.querySelector('.secondnumber').value);
    if (option == '+') {
        let li = document.createElement('li');
        li.innerText = input1 + input2;
        ul.appendChild(li);
    } else if (option == '-') {
        let li = document.createElement('li');
        li.innerText = input1 - input2;
        ul.appendChild(li);
    } else if (option == '*') {
        let li = document.createElement('li');
        li.innerText = input1 * input2;
        ul.appendChild(li);
    } else if (option == '/') {
        let li = document.createElement('li');
        li.innerText = input1 / input2;
        ul.appendChild(li);
    } else {
        console.log('error');
    }
});

//Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let button = document.querySelector('button');
button.addEventListener('mouseenter', (event) => {
    button.style.backgroundColor = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}`;
});

button.addEventListener('mouseleave', () => {
button.style.transform = `rotate(${getRandomInteger(0, 255)}deg)`;
})
