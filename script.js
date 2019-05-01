/*ESERCIZIO: Sasso, Carta e Forbice tra due giocatori CPU*/

/*Dichiaro una variabile con gli elementi Sasso,Carta e Forbice*/
var elements = ["SASSO", "CARTA", "FORBICE"];

/*Dichiaro una variabile del 1°giocatore per estrarre in modo casuale il lancio*/
var cpu1 = elements[Math.floor(elements.length * Math.random())];
document.writeln("1°giocatore lancia: " + cpu1 + "<br>");

/*Dichiaro una variabile del 2°giocatore per estrarre in modo casuale il lancio*/
var cpu2 = elements[Math.floor(elements.length * Math.random())];
document.writeln("2°giocatore lancia: " + cpu2 + "<br>");

/*Eseguo la condizione*/
if ((cpu1 == "SASSO" && cpu2 == "CARTA") || (cpu1 == "FORBICE" && cpu2 =="SASSO") || (cpu1 == "CARTA" && cpu2 == "FORBICE")) {
  document.writeln("Il 2°giocatore VINCE!!!");
} else if ((cpu1 == "CARTA" && cpu2 == "SASSO") || (cpu1 == "SASSO" && cpu2 == "FORBICE") || (cpu1 == "FORBICE" && cpu2 == "CARTA")) {
  document.writeln("Il 1°giocatore VINCE!!!");
} else {
  document.writeln("PAREGGIO!!!");
}
