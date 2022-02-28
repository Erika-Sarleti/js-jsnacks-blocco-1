// *********** jsnack-1 ***********  
/*

const num1 = prompt("scrivi un numero");
const num2 = prompt("scrivi un altro numero");

if (num1 > num2){
    document.write(num1);
} else if ( num2 > num1){
    document.write(num2);
} else{
    document.write(num1 + " " + num2);
}
*/

// *********** jsnack-2 *********** 
/*
let word1 = prompt("Scrivi una parola");
let word2 = prompt("Scrivi un'altra parola");

if (word1.length > word2.length){
    document.write(word2 + " " + word1);
    
} else{
    document.write(word1 + " " + word2) ;
    
}
*/

// *********** jsnack-3 ***********  
/*
let arrNum = [];

for (i = 0; i < 10; i++ ){
    let userNum = parseInt(prompt("inserisci un numero"));
    arrNum.push(userNum);
}
console.log(arrNum);

let somma = 0; 
for (i = 0; i < arrNum.length; i++ ){
   somma = somma + arrNum[i];
}
alert(somma);
*/

// *********** jsnack-4 *********** 
/*
let arrGatsby = ['Paolo', 'Giulia', 'Federico', 'Gustavo', 'Alessio', 'Ornella', 'Marina'];
let userName = prompt("Come ti chiami?");

if (arrGatsby.includes(userName)){
    document.write("Puoi partecipare alla festa");
} else{
    document.write("Non puoi partecipare alla festa");
    
}
*/

// *********** jsnack-5 ***********
/*
let arrNum = [];

for (i = 0; i < 6; i++){
   let userNum = parseInt(prompt("Scrivi un numero"));
   if (userNum % 2 == 1){
       arrNum.push(userNum);
   }
}

document.write(arrNum);
*/
// *********** jsnack-6 ***********
/*
const num = prompt("scegli un numero");
let somma = 0;
if (num.length == 4){
    for (i = 0; i < num.length; i++){
        somma = somma + parseInt(num[i]);
    }
    document.write(somma);
} else {
    document.write("Questo numero non ha 4 cifre");
}
*/
