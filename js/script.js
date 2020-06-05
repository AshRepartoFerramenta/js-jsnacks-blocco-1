// // Snack1
// // L’utente inserisce due numeri in successione, con due
// // prompt. Il software stampa il maggiore.
//
var numero1 = parseInt(prompt('Inserisci il primo numero'));
var numero2 = parseInt(prompt('Inserisci il secondo numero'));
//
//     //Condizione di numero 1 maggiore di numero 2
if (numero1 > numero2) {
  console.log(numero1);
    //Condizione di numero 2 maggiore di numero 1
} else if (numero1 < numero2) {
  console.log(numero2);
  // Altrimenti
} else {
  console.log('I numeri scelti sono uguali!');
}

//
// //Snack2
// //L’utente inserisce due parole in successione, con due
// //prompt. Il software stampa prima la parola più corta, poi la
// //parola più lunga.
//
// // Inserire la prima parola scelta
// var nome1 = prompt('Inserisci la prima parola che hai scelto');
// // Inserire la seconda parola scelta
// var nome2 = prompt('Inserisci la seconda parola che hai scelto');
//
//
//
//     //Condizione di maggioranza del primo nome
if (nome1.length > nome2.length) {
    //Condizione di maggioranza del secondo nome
} else if (nome1.length < nome2.length) {
  console.log(nome1, nome2);
    //In caso contrario
} else {
  console.log('Le due parole hanno la stessa lunghezza');
 }

//  // Snack3
// // Il software deve chiedere per 5 volte all’utente di inserire un
// // numero. Il programma stampa la somma di tutti i numeri
// // inseriti. Esegui questo programma in due versioni, con il for e while
//
//
// Versione con 'for'
var somma = 0;
for (var i = 0; i < 5; i++) {
  var numeri = parseInt(prompt('Inserisci un numero'));
  somma += numeri;
}
console.log(somma);


// Versione con 'while'
var somma = 0;
var i = 0;

while (i < 5) {
  var numeri = parseInt(prompt('Inserisci un numero'));
  somma += numeri;
  i++;
}
console.log(somma);


//  // Snack4
// //In un array sono contenuti i nomi degli invitati alla festa del grande
// //squadrone che ha vinto i mondiali di calcio nel 2006,
// // chiedi all’utente il suo cognome e comunicagli se può partecipare o no alla festa.
//
// //Inserire la lista dei campioni del mondo invitati al Gran Galà
var listaInvitati = ['Buffon', 'Cannavaro', 'Nesta', 'Barzagli', 'Grosso', 'Pirlo', 'Del Piero', 'Gattuso', 'Totti', 'Materazzi', 'Toni', 'Oddo', 'Zaccardo','De Rossi','Zidane'];
var nomeUtente = prompt('Qual è il tuo cognome?');

//
// //Inserire la variabile che indica il messaggio di non entrata
var messaggio = 'Pussa via Crucco!';
var i = 0;

// //Inserire le condizioni di entrata alla festa
while (i < listaInvitati.length) {
  var nomeCorrente = listaInvitati[i];
  if (nomeUtente == nomeCorrente) {
      //Inserire il messaggio di avvenuta vittoria e di entrata al party
    messaggio = 'Campioni del mondo,campioni del mondo,campioni del mondo!';
  }
  i++;
}

//Snake 4
//Chiedi un numero di 4 cifre all’utente e calcola la somma
//di tutte le cifre che compongono il numero.

//Inserire il messaggio iniziale
var numero=prompt('Inserire un numero di 4 cifre');
//Inserire la condizione di calcolo
while ((isNan(numero)) || (numero.length !=4)) {      // errore di riconoscimento 'isNaN'
    numero = prompt('Inserire un numero di 4 cifre');
}
// Variabile che definisce la condizione di salto del numero
var numeroChiesto= numero.split('');

//esecuzione della somma
var somma = 0;
for (var i = 0; 1 < numeroChiesto.length; i++) {
    var somma = somma + parseInt(numeroChiesto[i]);
}
console.log(somma);



// Generatore di “nomi cognomi” casuali: prendendo una
//lista di nomi e una lista di cognomi, Marcello Lippi vuole generare una falsa lista di invitati.


//Lista nomi
var name = ['gigi', 'fabio', 'alessandro', 'fabio', 'Johnatan', 'Francesco'];

//Lista Cognnomi
var surname = ['Buffon', 'Cannavaro', 'De rossi', 'Del piero', 'Camoranesi', 'Totti'];
// Lista falsi nomi
var falseList = 10;

// Generare lista nomi falsi
for (var i = 0; i < falseList; i++) {

    // indico l elemento random dalla lista nomi
    var elementiListaNomeRandom = Math.floor(Math.random() * name.length);
    var nomiElencoRandom = name[elementiListaRandom];
    // indico l elemento random dalla lista dei cognomi
    var elementiListaCogomeRandom = Math.floor(Math.random() * surname.length);
    var cognomiElencoRandom = surname[elementiListaRandom];

    //creo un possibile risultato falso da una lista di nomi e cognomi presi random
    var risultatoFalso = nomiElencoRandom + '' + cognomiElencoRandom;
}

//risultato generato random
falseList.push(risultatoFalso);

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
//fino a quando ne avrà tanti quanti l’altro.


// Inserisco il numero di elementi nel prima array
var array1 = ['quiquoqua', 'junior', 'drago shenron', 're kaio', 'crillin', 'goku', 'vegeta', 'c-18', 'c-16', 'c-17'];
//Inserisco il numero di elementi nel secondo array
var array2 = ['gogeta', 'vegetto', 'trunks', 'goten'];
var casualItem = ['majinbu', 'bulma', 'gohan', 'cell', 'broly', 'songoku', 'freezer'];

// eseguo la condizione random di elementi generati
while(array1.length > array2.length) {
  array2.push(casualItem[Math.floor(Math.random()*casualItem.length)]);
}
console.log(array1);
console.log(array2);
