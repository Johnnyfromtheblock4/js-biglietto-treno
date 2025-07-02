//definizione variabili
const km = parseFloat(prompt(`inserisci i km`));
const age = parseInt(prompt(`inserisci l'età`));

//variabile che conterrà il prezzo finale da mostrare
let finalPrice;
let message;

//calcolo prezzo biglietto senza sconti
const basePrice = km * 0.21;

//calcolo biglietto scontato
if (age < 18) {
  finalPrice = basePrice - (basePrice * 20) / 100;
  message = `Hai diritto ad uno sconto del 20% in quanto minorenne. Il prezzo del biglietto è pari a ${finalPrice}`;
} else if (age > 65) {
  message = `Hai diritto ad uno sconto del 20% in quanto over 65. Il prezzo del biglietto è pari a ${finalPrice}`;
  finalPrice = basePrice - (basePrice * 40) / 100;
} else {
  finalPrice = basePrice;
  message = `Il prezzo del biglietto è pari a ${finalPrice}`;
}

console.log(`Il prezzo finale del biglietto è di ${finalPrice.toFixed(2)}`);
