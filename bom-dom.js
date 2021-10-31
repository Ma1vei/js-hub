// document.body.style.background = 'green';
// document.body.style.color = 'blue';
// document.body.children[0].innerText = 'свой текст';


// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).
// Задание 3
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
let a = document.querySelectorAll('li');
for(let i = 0; i < a.length; i++) {      
  a[i].innerText = i;
}




// let div = document.createElement('div');
// document.body.appendChild(div);
// let span = document.createElement('span');
// span.innerText = 'misha';
// document.body.appendChild(span);
// let ul = document.createElement('ul');
// let li = document.createElement('li');
// ul.appendChild(li).innerText = 'text';
// document.body.appendChild(ul);









//Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
function createTag(name, color, inner) {
    let element = document.createElement(name);
    element.style.color = color;
    element.innerText = inner;
    document.body.appendChild(element);
    console.log(element);
}
createTag ('div', 'red', 'hi');








//Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
let element = document.createElement('div');
element.innerText = 'этот текст сделан при помощи js';
element.style.fontSize = '36px';
element.style.fontWeight = '800';
document.body.appendChild(element);








//Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.
let select = document.querySelector('select');
document.body.appendChild(select);
for (let i = 1960; i <=2021; i++) {
    let option = document.createElement('option');
    option.innerText = i;  
    select.appendChild(option);
}








//Вставить в страницу (в html документ) ul.
//Предусмотреть в коде следующий массив:
// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
let arr = [{
    name: "Женя",
    order: true
    },
    {
    name: "Кристина",
    order: true
    },
    {
   name: "Павел",
   order: false
   },
   {
   name: "Виолетта",
   order: false
   },
   {
   name: "Костя",
   order: true
}];
let ul = document.createElement('ul')
document.body.appendChild(ul);
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    let status = arr[i].order ? 'оплатил' : 'отменил';
    li.innerText = `клиент ${arr[i].name} ${status} заказ`;
    ul.appendChild(li);
}








// Есть массив ссылок:
// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
let div = document.createElement('div');
div.style.background = 'yellow';
div.style.padding = '20px 20px 20px 20px';
document.body.appendChild(div);
for (let i = 0; i < linksArr.length; i++) {
    let a = document.createElement('a');
    a.style.display = 'block';
    a.setAttribute('href', linksArr[i]);
    a.setAttribute('target', '_blank');
    a.innerText = linksArr[i];
    div.appendChild(a);
}









// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()
let a = document.querySelectorAll('.forremove');
for (let i = 0; i < a.length; i++) {
    a[i].remove();
}








//Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
//заполненную этими объектами. Name должно быть красного цвета, age - зеленого.
let arr = [{name: 'матвей', age: 14}, {name: 'вика', age: 17}, {name: 'влад', age: 16}];
let table = document.createElement('table');
table.setAttribute('border', "2");
table.setAttribute('cellspacing', "0");
document.body.appendChild(table);
let tbody = document.createElement('tbody');
table.appendChild(tbody);

for(let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td1 = document.createElement('td');
    td1.innerText = arr[i].name;
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerText = arr[i].age;
}




// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// С помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)
alert(location.href);
alert(navigator.userAgent);
console.log(`с помощью браузера ${navigator.userAgent} я открыл ${location.href}`);
