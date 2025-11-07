// Esercizio Pari o Dispari

/**
 * Input 
 */

let puntata = prompt("Scegli tra pari o dispari")
let puntataGiocatore = parseInt(prompt("Scegli un numero tra 0 e 5"))

/**
 * Funzione per generare numeri randomici e creazione variabile puntataComputer
 */

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) +1);   
}

let puntataComputer = numeroRandom(0, 5);

//console.log("puntata su:", puntata);
//console.log("Il giocatore punta su:", puntataGiocatore);
//console.log("Il computer punta su:", puntataComputer);

/**
 * Creazione seconda funzione per contollare se numero è pari o dispari
 */

function pariOdispari(numero) {
     if ( numero % 2 != 0 ) {
        return "dispari";
     }
     return "pari";     
}

let risultato = pariOdispari(puntataGiocatore + puntataComputer);
 
console.log(risultato);
/**
 * Dochiarazione vincitore
 */

if ( puntata == risultato) {
    console.log("Complimenti! Hai vinto!");
} else {
        console.log("Oh no...hai perso!");
    }
