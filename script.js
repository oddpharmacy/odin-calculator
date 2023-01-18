// on click change display text to number
// populate display function
let display = document.querySelector('.display');
let displayValue;
let number = document.querySelectorAll('.number');

function popDisplay(val) {
    val.addEventListener('click', function(event) {
        display.innerHTML = val.textContent;
        displayValue = Number(display.innerHTML);
    })
    return val.textContent;
}

for (let i = 0; i < number.length; i++) {
    displayValue = popDisplay(number[i]);
}

// operator press
let operatorChoice;
let operators = document.querySelectorAll('.operator');

function operatorClick(op) {
    op.addEventListener('click', function(event) {
        operatorChoice = op.textContent;
        console.log(operatorChoice);
    })
}

for (let i = 0; i < operators.length; i++) {
    operatorClick(operators[i]);
}

// function add() {
//     let total = 0;
//     for (argument in arguments) {
//         total += argument;
//     }
//     return total;
// }

// function subtract() {
//     let total = 0;
//     for (argument in arguments) {
//         if (total == 0) {
//             total = argument;
//             continue;
//         }
//         total -= argument;
//     }
//     return total;
// }

// function multiply() {
//     let total = 1;
//     for (argument in arguments) {
//         total *= argument;
//     }
//     return total;
// }

// function divide() {
//     let total = 0;
//     for (argument in arguments) {
//         if (total == 0) {
//             total = argument;
//             continue;
//         }
//         total /= argument;
//     }
//     return total;
// }

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate(op, a, b) {
    // if op is equal to id/class element of + (for example) call add()

}

// let plus = document.querySelector('.plus');
// let minus = document.querySelector('.minus');
// let divide = document.querySelector('.divide');
// let multiply = document.querySelector('.multiply');