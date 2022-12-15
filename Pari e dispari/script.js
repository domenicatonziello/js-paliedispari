/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Uso una funzione per generare un numero random da 1 a 5
function randomNumber (min = 1, max = 5){
    const nRandom = Math.floor(Math.random() * (max + 1 - min) + min);
    return nRandom;
}
const nRandom = randomNumber();
console.log(nRandom);

// Uso una funzione per stabilire se la somma è pari o dispari
function getEvenOrOdd (number){
    const message = number % 2 === 0 ? "E' PARI!" : "E' DISPARI!";
    return message;
}

// Prendo elementi dal DOM
const form = document.getElementById('my-form');
const select = document.getElementById('even-or-odd');
const number = document.getElementById('number');
const button = document.getElementById('btn');
const result = document.getElementById('result');


// Aggiungo event listener al form
form.addEventListener ('submit', function(event){
    // blocco comportamento form
    event.preventDefault();
    // prendo valori degli input
    const userChoise = select.value;
    const userNumber = parseInt(number.value);
    console.log('select:' + userChoise + 'user number:' + userNumber);
    
    // sommo i due valori
    const sum = nRandom + userNumber;
    // stabilisco se la somma è pari o dispari
    const message= getEvenOrOdd(sum);
    console.log(message);

    // dichiaro i vincitori

    result.innerText = userChoise === message ? 'HAI VINTO!' : 'HAI PERSO!';
});