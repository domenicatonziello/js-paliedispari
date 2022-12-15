/*
Chiedere all’utente di inserire una parola tramite un form
Creare una funzione per capire se la parola inserita è palindroma
*/

//* CREO FUNZIONE PER CAPIRE SE LA PAROLA INSERITA E' PALINDROMA:
function isPalindroma(text){
    
    // inverto ordine delle lettere
    let textReverse = '';
    for(let i = text.length - 1; i >= 0 ; i-- ){
        textReverse += text[i];
    }
    
    // Creo variabile booleana
    let isPalindroma = false;
    if(textReverse === text){
        isPalindroma = true;
    }
    
    // restituisco valore
    return isPalindroma;  
}

//* Prendo elementi dal DOM
const form = document.getElementById('my-form');
const userText = document.getElementById('text');
const button = document.getElementById('btn');

//* Creo EVEN LISTENER AL FORM
form.addEventListener('submit', function(event){
    // blocco evoluzione form
    event.preventDefault();
    // prendo value dell'input
    const userWord = userText.value.trim().toLowerCase();
    // validazione
    if (userWord){
        // assegno funzione alla parola
        const wordPalindroma = isPalindroma(userWord);
        console.log(wordPalindroma);
    } else {
        alert('Il testo inserito non è valido');
    }
});
