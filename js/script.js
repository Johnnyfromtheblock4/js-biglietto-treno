//definizione variabili
const km = parseFloat(prompt(`inserisci i km`));
const age = parseInt(prompt(`inserisci l'età`));
const priceKm = 0.21;

//calcolo prezzo biglietto senza sconti
let totalPrice = km * priceKm;
console.log(totalPrice);

//calcolo biglietto sconto
if (age < 18) {
  const discount = (totalPrice * 20) / 100;
  totalPrice = totalPrice - discount;
} else if (age > 65) {
  const discount = (totalPrice * 40) / 100;
  totalPrice = totalPrice - discount;
}

console.log(totalPrice.toFixed(2));
