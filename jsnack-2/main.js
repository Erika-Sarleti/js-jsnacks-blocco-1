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
let nameList = ['Claudio', 'Ernesto', 'Lucia', 'Francesca', 'Leonardo', 'Martina', 'Federico', 'Roberta'];

let lastNameList = ['Rossi', 'Beccardi', 'Tomassini', 'Bianchi', 'Tascioni', 'Martelluzzo', 'Ruspante', 'Ornamenti', 'Di Michele'];


let arrFakeId = [];

for (i = 0; i < 3; i++){
    let random1 = Math.floor(Math.random() * 8);
    let random2 = Math.floor(Math.random() * 9);
    let fakeId = lastNameList[random2] + " " + nameList[random1];
    console.log(fakeId)
    arrFakeId.push(fakeId);
}

document.write(arrFakeId);

*/
