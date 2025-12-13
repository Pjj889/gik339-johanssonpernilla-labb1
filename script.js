
// --Uppgift 2 - variabler och scope--


console.log("Om skriptet är kopplat kan jag läsa detta meddelande i konsolen i devtools");

{
//    let x = 12;
//    const y = 15;
var j = 20;
}
console.log(j); // 20
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined

let x = 5;
const y = 10;

var j = 15;

console.log(x); // 5
console.log(y); // 10
console.log(j); // 15

 
/*Reflektion uppgift 2

Jag provade att deklarera variabler med let, const och var, - först inuti ett block.
När jag sedan försökte logga variablerna x, y utanför blocket fick jag
ReferenceError, detta fel uppstod därför att det blev en block-scope.

j variabeln däremot är åtkomlig även efter blocket,
eftersom (var) inte är block-scope utan funktions-scope.

Placeringen av console.log() som här placerades utanför blocket påverkade 
alltså om variablerna innanför blocket gick att nå eller inte.*/



// --Uppgift 3 - Jämförelser och specialvärden--


// == och ===
console.log('5' == 5)//true
console.log('5' === 5)//false

// NaN
console.log(NaN === NaN);       // false

// Null och undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Ternary operator för truthy/falsy
console.log(undefined ? "truthy" : "falsy"); // falsy
console.log(0 ? "truthy" : "falsy");         // falsy
console.log('hello' ? "truthy" : "falsy");   // truthy


/*
Reflektion uppgift 3

Jag testade == och === med olika värden. Resultatet visar att:
- == jämför värden med typkonvertering
- === jämför både typ och värde

Exempel: '5' == 5 är true men '5' === 5 är false

Jag testade även NaN, null och undefined:
- eftersom NaN inte ens är lika med sig själv, alltså inget värde blir NaN === NaN false

- null == undefined är true, men === är false

Med ternary-operatorn såg jag att undefined och 0 är falsy, men att icke-tomma strängar blev truthy.
Detta visar på att det går att använda uttryck för villkor i if-satser eller andra kontrollstrukturer.
*/


// --Uppgift 4 - Funktioner --

// Deklarerar en funktion som tar ett namn som 
// parameter och returnerar en hälsning

function greet(name) {
    return `Hej, ${name}!`;
}

//Anropar funktionen med olika namn
console.log(greet("Pernilla")); // Hej, Pernilla!
console.log(greet("Stefan"));   // Hej, Stefan!

// Variabel(global) med samma namn som parametern
let name = "Johansson";
console.log(greet(name));  // Hej, Johansson!

// Parametern 'name' skuggar den globala variabeln 'name' inom funktionen
console.log(name); // Johansson


/*Reflektion uppgift 4*
Jag skapade en funktion som tar en parameter 'name' 
och returnerar en hälsning.
Att jag valde att använda en funktionsdeklaration var därför att denna typ av 
funktionkan anropas innan den är definierad i koden, detta utmärker den från
funktionsuttryck och arrowfunktioner.

Funktionen greet tar parametern med namnet name. Parametern verkar lokalt
för funktionen och skuggar den globala variabeln med samma namn.
Den globala variabelns värde påverkas inte av vad som
händer inuti funktionen.

Efter att funktionen är skapad kan den anropas och returnerar ett värde
som skrivs ut med console.log().

- Parameter = namnet som användes för definition av funktionen (name).
- Argument är ett värde som skickas in vid funktionsanropet , här:("Pernilla", "Stefan" eller name).
- Variabel är ett lagrat värde i koden.
*/









