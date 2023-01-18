let display = document.querySelector('.display');
let number = document.querySelectorAll('.number');


//on click change display text to number
// populate display function
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(event) {
        display.innerHTML = number[i].textContent;
    })
}


