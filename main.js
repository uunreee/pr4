'use strict';
// 1 

function printEvenNumbers() {
    let a = parseInt(prompt("начальное число (a):", ""));
    let b = parseInt(prompt("конечное число (b):", ""));

    if (isNaN(a) || isNaN(b)) {
        alert("введите числовые значения.");
        return;
    }

    let result = "";
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }

    if (result) {
        alert("Четные числа: " + result);
    } else {
        alert("Четных чисел нет.");
    }
}

printEvenNumbers();

// 2 

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// 3 

let number;
do {
    number = prompt("число большее 10:", "");
} while (number !== null && number <= 10);

// 4 

function findMin() {
    let a = parseFloat(prompt("первое число (a):", ""));
    let b = parseFloat(prompt("второе число (b):", ""));

    let min = a < b ? a : b;

    alert("Меньшее число: " + min);
}
findMin();

// 5 

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
};

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы не согласились.")
);

// 6 

const checkAge = () => (parseInt(prompt("Ваш возраст:", ""), 10) > 18) || confirm("А родители то разрешили?");

checkAge();