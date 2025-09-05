let text="Hello, World!";
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}


for (let i = 1; i <= 10; i++) {
  console.log(i);
}



let antall = 0;
  
let password ="skrive inn password";
 password = prompt("Skriv inn passordet ditt:");
while (antall  < 2 )  {
    if (password === "GOD DAG") {
        console.log("Passordet er riktig!");
        break;
    } else {
        console.log("Feil passord. Prøv igjen.");
        antall = antall + 1;    
        
    }
       password = prompt("Skriv inn passordet ditt:");     

}   


let 

let tall =Number(prompt("Skriv inn et tall mellom 1 og 10:"));
if (tall%2 === 0) {
    console.log("Tallet er partall");
} else {
    console.log("Tallet er oddetall");
}   

let gangetabellen = ("")
