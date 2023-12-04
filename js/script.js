/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */ 


let NumKm = prompt('Quanti chilometri vuoi percorrere ?');
console.log("I km che vuole percorrere il passegero sono : " + NumKm);

if (isNaN(NumKm)){
    alert("inserisci un numero valido di Km");
};

const CostoBigliettoperKm = (0.21 * parseInt(NumKm));

let CostoBiglietto = (CostoBigliettoperKm).toFixed(1);
console.log("Il prezzo del biglietto per il passeggero è : " + CostoBiglietto);

// ETA PASSEGGERO

let EtaPasseggero = prompt('Quanti anni hai ?');
console.log("l'età dell'utente è : " + EtaPasseggero);

if (isNaN(EtaPasseggero)){
    alert("inserisci un eta' valida");
};

// SCONTO

let Sconto20 = ((parseInt(CostoBiglietto) * 20) / 100);

let Sconto40 = ((parseInt(CostoBiglietto) * 40) / 100);

// SCONTO UNDER 18
let CostoBigliettoUnder18
if (EtaPasseggero < 18){
    CostoBigliettoUnder18 = (parseInt(CostoBiglietto) - parseInt(Sconto20));
};

console.log("Il costo del biglietto per il passeggero under 18 è : " + CostoBigliettoUnder18);

// SCONTO OVER 65
let CostoBigliettoUnder65;
if (EtaPasseggero > 65){
    CostoBigliettoUnder65 = (parseInt(CostoBiglietto) - parseInt(Sconto40));
};

console.log("Il costo del biglietto per il passeggero over 65 è : " + CostoBigliettoUnder65);
