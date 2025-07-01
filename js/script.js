//definizione variabili
const km = parseFloat(prompt(`inserisci i km`));
const age = parseInt(prompt(`inserisci l'età`));
const priceKm = 0.21;

//calcolo prezzo senza sconti
let totalPrice = km * priceKm;
console.log(totalPrice)

//biglietto sconto
if (age >= 18) {
  const discount = (totalPrice * 20) /100;
  
}