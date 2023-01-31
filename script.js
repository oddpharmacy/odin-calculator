// create display
let display = document.querySelector('.display');
let displayValue;

// populate display upon button clicks
let previousValue;
let number = document.querySelectorAll('.number');
let code;
let numberClicked;


function popDisplay(val) {
    val.addEventListener('click', function(event) {
        displayFont(35);
        if (display.innerText == "0") {
            display.innerText = display.innerText.substring(1);
        }
        else if (display.innerText.length >= 15 && operatorClicked == false) {
            return;
        }
        else if (code == "01") {
            code = "inactive";
            display.innerText = '';
        }
        numberClicked = true;
        display.innerText += val.textContent;
        return displayValue = display.innerText;
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
        display.innerText += point.textContent;
        havePoint = true;
        return displayValue = display.innerText;
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

// calculate result
const equal = document.querySelector('.equal');

function result() {
    displayValue = operate(operatorChoice, Number(previousValue), Number(displayValue));
    display.innerText = roundAns(displayValue);
}

function checkEqual(eq) {
    eq.addEventListener('click', function(event) {
        if (previousValue == '0' && displayValue == '0' && operatorChoice == '÷') {
            displayFont(20);
            display.innerText = '⋆ ˚｡⋆୨୧˚impossible ૮ ˶ᵔ ᵕ ᵔ˶ ა♡';
            previousValue = undefined;
            numberClicked = false;
            havePoint = false;
        }
        else if (previousValue != undefined && displayValue != undefined && operatorChoice != undefined) {
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


function operate(op, a, b) {
    switch (true) {
        case (op == '+'):
            return a + b;

        case (op == '-'):
            return a - b;

        case (op == 'x'):
            return a * b;

        case (op == '÷'):
            return a / b;
    }
}

// clear
const ac = document.querySelector('.clear');

function clear() {
    ac.addEventListener('click', function(event) {
        displayValue = undefined;
        previousValue = undefined;
        display.innerText = "0";
        numberClicked = false;
        operatorClicked = false;
        operatorChoice = undefined;
        havePoint = false;
        code = "inactive";
        displayFont(35);
    })
}
clear();


// round answers
function roundAns(num) {
    return Math.round((num + Number.EPSILON) * 10000000000000 ) / 10000000000000;
}