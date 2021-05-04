'use strict';

function calc() {
    const buttonValue = this.value;
    const resultPlace = document.querySelector("#result");

    if(buttonValue === 'C') {
        resultPlace.value = '';    
    } else if(buttonValue === '=') {
        resultPlace.value = eval(resultPlace.value);
    } else {
        resultPlace.value += buttonValue;
    }
}

const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {

    button.addEventListener('click', calc);

});