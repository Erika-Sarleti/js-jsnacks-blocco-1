// ********** JSNACK 1.9 **********

// let somma= 0;
// CICLO FOR
/*
for (i = 1; i <= 10; i++){
    somma += i; 
}
*/

// CICLO WHILE
/*
let i = 1;
while (i <= 10){
    somma = somma + parseInt(i); 
    i++;    
}
*/
//  QUESTO è COMUNE A TUTTI E DUE
/*
let media = somma / 10;
console.log(somma);
console.log(media);
*/


// ********** JSNACK 2.1 **********


// chiedi all'utente di inserire un numero (x5)
// somma ogni numero alla somma totale
// let somma = 0;
//  Se i = 0, fai in modo che il ciclo vada avanti fino a quando i < 5 diventi falsa, poi fermalo (aumenta di 1 ogni ciclo)

/*
for (i = 0; i < 5;i++){    
    userNum = parseInt(prompt("Inserisci un numero"));
    somma += userNum;
}
*/
/*
let i = 1;
// Finché i è minore o uguale a 5, continua il ciclo. Quando i diventa maggiore, chiudilo 
while (i <= 5){     
    userNum = parseInt(prompt("Inserisci un numero"));
    somma += userNum;
    i++;
}
*/
// document.write(somma);


// ********** JSNACK 2.2 **********
/*
let userNum = prompt("inserisci un numero");
if (userNum % 2 == 0){
    document.write(userNum);
} else{
    document.write(parseInt(userNum) + 1);
}
*/

// ********** JSNACK 2.3 **********




/*
- genera array con nomi 
- genera array con cognomi
- prendi le liste 3 volte
- genera un array con le identità false
- genera una variabile che da un numero casuale
- di ad ogni array di scegliere la posizione della variabile casuale
- aggiungere gli elementi all'array delle identità
- copiare l'array delle identità nella pagina




*/
//                   0        1       2        3         4        5          6        7
const nameList = [Claudio, Ernesto, Lucia, Francesca, Leonardo, Martina, Federico, Roberta]
//                      0      1          2         3         4          5           6         7
const lastNameList = [Rossi, Beccardi, Tomassini, Bianchi, Tascioni, Martelluzzo, Ruspante, Ornamenti]
