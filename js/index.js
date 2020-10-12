// Iteration 1: Names and Input
hacker1="Jorge";
console.log (`The driver's name is ${hacker1}`);
hacker2="Tiago";
console.log (`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.lenght > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`) 
 } else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`) 
 }
 else {
     console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
 }


// Iteration 3: Loops
let space ="";
let space1="";
for (i=0; i<hacker1.length; i++){
    space += hacker1[i] + " ";
}
console.log (space.toUpperCase());
for (i=hacker1.length-1; i>=0; i--) {
    space1 += hacker1[i];
}
console.log (space1);

if (hacker1.localeCompare(hacker2)===1){
    console.log ("The driver's name goes first.");}
    else if (hacker1.localeCompare(hacker2)===-1) {
    console.log ("Yo, the navigator goes first definitely.");
    }
    else {
    console.log ("What?! You both have the same name?"); 
    }

//Bonus1

let lorem = "Start by writing down one of your main ideas, in sentence form. Next, write down each of your supporting points for that main idea, but leave four or five lines in between each point. In the space under each point, write down some elaboration for that point."
let counter=0;
let counter1=0;
for (i=0; i<lorem.length; i++) {
    if (lorem[i]===" "|| lorem[i]===","|| lorem[i]==="."){
        counter++;
    }
    if (lorem [i]==="," && lorem[i+1]===" " ||lorem [i]==="." && lorem[i+1]===" " ) {
        counter--;
    }
    if (lorem [i]===" " && lorem[i+1]==="i" && lorem[i+2]==="n" && lorem[i+3]===" ") {
        counter1++;
    } // used the word "in".  
}
console.log (counter-1);
console.log (counter1);

//Bonus2

let phraseToCheck="Amor, Roma";
let space2=""; // Sentence in reverse without spaces
let space3=""; // Sentence without spaces
for (i=phraseToCheck.length-1; i>=0; i--) {
    if (phraseToCheck[i]!=" ") {
    space2 += phraseToCheck[i].toLowerCase();
}
}
for (i=0; i<phraseToCheck.length; i++) {
    if (phraseToCheck[i]!=" ") {
        space3 += phraseToCheck[i].toLowerCase();
}
}
if (space3===space2) {
    console.log("It is a palindrome!")
}
else {
    console.log ("Its not a palindrome!")
}
console.log (space2);
console.lot (space3);