//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst (str) {
    let s = str[0].toUpperCase();
    let s2 = str.slice(1);
    console.log(s + s2);
}
ucFirst('hello');





//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру.
function checkSpam(str) {
    let a = str.toLocaleLowerCase();
    if (a.includes('badword') || a.includes('xxx')) {
        console.log(true); 
    } else {
        console.log(false);
    }
}
checkSpam('afadf');







//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
let reverseString = (str) => {    return str.split('').reverse().join(''); 
}
console.log(reverseString('я женя'));










// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
// let stations = [
// MAN675847583748sjt567654;Manchester Piccadilly,
// GNF576746573fhdg4737dh4;Greenfield, 
// LIV5hg65hd737456236dch46dg4;Liverpool Lime Street, 
// SYB4f65hf75f736463;Stalybridge, 
// HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield
// ]
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield', 
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street', 
    'SYB4f65hf75f736463;Stalybridge',  
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'    
];
let ul = document.createElement('ul');
document.body.appendChild(ul);
for (let i = 0; i < stations.length; i++) {
    let li = document.createElement('li');
    let a = stations[i].substr(0, 3);
    let n = stations[i].indexOf(';');
    let name = stations[i].slice(n + 1);
    li.innerText = a + ':' + ' ' + name;
    ul.appendChild(li);
}




// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
function unique(arr) {
    let newstrings = [];
    for (let i = 0; i < strings.length; i++) {
        if (newstrings.includes(strings[i]) == 0) {
            newstrings.push(strings[i]);
        }    
    }
}
unique(strings);
