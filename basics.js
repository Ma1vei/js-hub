//Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)
let nam = prompt();
alert('привет ' + nam);




//Запросить у пользователя число. Затем запросить степень, в которую нужно возвести это число. Вывести в консоль результат.
let user = prompt('число');
let pow = prompt('степень');
let num1 = Number(user);
let num2 = Number(pow);
alert(num1 ** num2);





//Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
//* предусмотреть вариант ввода одинаковых чисел
let num1 = Number(prompt());
let num2 = Number(prompt());
if (num1 > num2) {
    console.log('Большее: ' + num1); 
} else if (num2 > num1) {
    console.log('Большее: ' +num2);
} else {
    console.log('Равны');
}





//Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.
let num1 = Number(prompt());
let num2 = Number(prompt());
if (num1 % num2 == 0) {
    console.log('yes'); 
} else {
    console.log('no');
}





// for (let i = 0; i < 3; i++) {
//     console.log(alert('hi'));
// }






//Создать переменную и записать в нее число, например 10.
//10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.
let a = 10;
for (let i = 0; i < 10; i++) {
    a++;
    console.log(a);
}




//Увеличивая счетчик цила на 2, нужно 5 раз:
//- запрашивать у пользователя ввод числа
//- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"
for (let i = 2; i < 5; i++) {
    let num1 = Number(prompt());
    if (num1 == 10) {
        console.log('равно 10');
    } else {
        console.log('не рано 10');
    }
}





//Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
//* Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
let n = Number(prompt());
for(let i = 0; i < n; i++) {
    console.log(i ** 2);
} 





//Напишите программу, которая выводит в консоль числа от 1 до 100.
//При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
 for(let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log('fizzbizz');
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else if (i % 5 == 0) {
        console.log('bizz');
    } else {
        console.log(i);
    }
}





//Задайте в коде переменную n с числовым значением.
//1) с помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
//2) с помощью логического ИЛИ в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
let n = 5;
if (n >= 0 && n <= 100) {
    console.log('yes');
} else {
    console.log('no')
}
if (n < 0 || n > 100) {
    console.log('no');
} else {
    console.log('yes');
}
