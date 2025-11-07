// Esercizio Pari o Dispari

/**
 * Input 
 */

let puntata = prompt("Scegli tra pari o dispari")
let puntataGiocatore = parseInt(prompt("Scegli tra pari o dispari"))

/**
 * Funzione per generare numeri randomici e creazione variabile puntataComputer
 */

function numeroRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) +1);   
}

let puntataComputer = numeroRandom (0, 5);