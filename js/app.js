const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
const btnIncrease = document.querySelector('.btn-increase');

let number = document.querySelector('.counter-number');
let count = 0;

/**
 * countNumber() serve apenas para alterar o valor do contatos.- .-. 
 */

function countNumber(setValue) {
    number.innerHTML = setValue;
}

/**
 * A função changeColor() modifica a cor do contador de acordo com o valor.- .-. 
*/

function changeColor(value) {
    if (value > 0) {
        number.setAttribute('style', 'color: green;');
    } else if (value < 0) {
        number.setAttribute('style', 'color: red;');
    } else {
        number.setAttribute('style', 'color: black;');
    }
}

/**
 * Todo o código daqui pra baixo serve apenas para realizar ações de click.- .-. 
*/

btnIncrease.addEventListener('click', (event) => {
    count++;
    countNumber(count);
    changeColor(count);
});

btnDecrease.addEventListener('click', (event) => {
    count--;
    countNumber(count);
    changeColor(count);
});

btnReset.addEventListener('click', (event) => {
    count = 0;
    countNumber(count);
    changeColor(count);
});

