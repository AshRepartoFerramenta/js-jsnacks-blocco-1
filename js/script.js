// Snack1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var numero1 = parseInt(prompt('Inserisci il primo numero'));
var numero2 = parseInt(prompt('Inserisci il secondo numero'));

    //Condizione di numero 1 maggiore di numero 2
if (numero1 > numero2) {
  console.log(numero1);
    //Condizione di numero 2 maggiore di numero 1
} else if (numero1 < numero2) {
  console.log(numero2);
  // Altrimenti
} else {
  console.log('I numeri scelti sono uguali!');
}


//Snack2
//L’utente inserisce due parole in successione, con due
//prompt. Il software stampa prima la parola più corta, poi la
//parola più lunga.

// Inserire la prima parola scelta
var nome1 = prompt('Inserisci la prima parola che hai scelto');
// Inserire la seconda parola scelta
var nome2 = prompt('Inserisci la seconda parola che hai scelto');



    //Condizione di maggioranza del primo nome
if (nome1.length > nome2.length) {
    //Condizione di maggioranza del secondo nome
} else if (nome1.length < nome2.length) {
  console.log(nome1, nome2);
    //In caso contrario
} else {
  console.log('Le due parole hanno la stessa lunghezza');
 }
