// on click change display text to number
// populate display function
let display = document.querySelector('.display');
let displayValue;
let previousValue;
let number = document.querySelectorAll('.number');
let code;
let numberClicked;


function popDisplay(val) {
    val.addEventListener('click', function(event) {
        displayFont(35);
        if (display.innerHTML == "0") {
            display.innerHTML = display.innerHTML.substring(1);
        }
        else if (display.innerHTML.length >= 15) {
            return;
        }
        else if (code == "01") {
            code = "inactive";
            display.innerHTML = '';
        }
        numberClicked = true;
        display.innerHTML += val.textContent;
        return displayValue = display.innerHTML;
    })
}

for (let i = 0; i < number.length; i++) {
    popDisplay(number[i]);
}

// display prop
function displayFont(size) {
    display.style.fontSize = `${size}px`;
}

// point button for decimals
let point = document.querySelector('.point');
let havePoint = false;

function decPoint(point) {
    point.addEventListener('click', function(event) {
        if (numberClicked = false || havePoint == true) {
            return;
        }
        display.innerHTML += point.textContent;
        havePoint = true;
        return displayValue = display.innerHTML;
    })
}

decPoint(point);

// operator press
let operatorChoice;
let operators = document.querySelectorAll('.operator');
let operatorClicked = false;

function operatorClick(op) {
    op.addEventListener('click', function(event) {
        if (operatorClicked == false && previousValue == undefined) {
            previousValue = displayValue;
            code = "01";
            numberClicked = false;
        }
        else if (operatorClicked == true && numberClicked == true) {
            if (previousValue != undefined && displayValue != undefined && operatorChoice != undefined) {
                result();
                code = "01";
                previousValue = displayValue;
                numberClicked = false;
            }
        }
        havePoint = false;
        operatorClicked = true;
        operatorChoice = op.textContent;  
        op.classList.add("operatorStyle");
    })
}

for (let i = 0; i < operators.length; i++) {
    operatorClick(operators[i]);
}


// calculate when = is pressed
const equal = document.querySelector('.equal');

function result() {
    display.innerHTML = operate(operatorChoice, Number(previousValue), Number(displayValue));
    display.innerHTML = displayValue;
}

function checkEqual(eq) {
    eq.addEventListener('click', function(event) {
        if (previousValue == '0' && displayValue == '0' && operatorChoice == '÷') {
            console.log('oops');
            displayFont(20);
            display.innerHTML = '⋆ ˚｡⋆୨୧˚do u even math? ૮ ˶ᵔ ᵕ ᵔ˶ ა♡';
            previousValue = undefined;
            numberClicked = false;
            havePoint = false;
        }
        else if (previousValue != undefined && displayValue != undefined && operatorChoice != undefined) {
            console.log('huh');
            result();
            previousValue = displayValue;
            operatorClicked = false;
            code = "01";
            operatorChoice = undefined;
            numberClicked = false;
            havePoint = false;
        }
    })
}

checkEqual(equal);


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

// clear
const ac = document.querySelector('.clear');

function clear() {
    ac.addEventListener('click', function(event) {
        displayValue = undefined;
        previousValue = undefined;
        display.innerHTML = "0";
        numberClicked = false;
        operatorClicked = false;
        operatorChoice = undefined;
        havePoint = false;
        code = "inactive";
    })
}
clear();


// round answers
function roundAns(num) {
    Math.round((num + Number.EPSILON) * 100 ) / 100;
}