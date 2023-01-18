// on click change display text to number
// populate display function
let display = document.querySelector('.display');
let displayValue;
let previousValue;
let number = document.querySelectorAll('.number');

function popDisplay(val) {
    val.addEventListener('click', function(event) {
        if (display.innerHTML == "0") {
            display.innerHTML = display.innerHTML.substring(1);
        }
        display.innerHTML += val.textContent;
        return displayValue = display.innerHTML;
    })
}

for (let i = 0; i < number.length; i++) {
    displayValue = popDisplay(number[i]);
}

// operator press
let operatorChoice;
let operators = document.querySelectorAll('.operator');
let operatorClicked = false;

function operatorClick(op) {
    op.addEventListener('click', function(event) {
        operatorChoice = op.textContent;
        return operatorClicked = true;
    })
}

for (let i = 0; i < operators.length; i++) {
    operatorClick(operators[i]);
}




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
    switch (true) {
        case (op == '+'):
            displayValue = add(a, b);
            break;

        case (op == '-'):
            displayValue = subtract(a, b);
            break;

        case (op == 'x'):
            displayValue = multiply(a, b);
            break;

        case (op == '÷'):
            displayValue = divide(a, b);
            break;

        default:
            break;
    }

}

// let plus = document.querySelector('.plus');
// let minus = document.querySelector('.minus');
// let divide = document.querySelector('.divide');
// let multiply = document.querySelector('.multiply');