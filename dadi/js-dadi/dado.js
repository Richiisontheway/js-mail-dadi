


let giocatore = Math.floor((Math.random() * 6) + 1);

console.log(giocatore);

let computer = Math.floor((Math.random() * 6) + 1);

console.log(computer);


if(giocatore == computer){

    alert('hai pareggiato bucchin')

}
else if ( giocatore < computer){

    alert('hai perso bucchin')
}
else{
    alert('hai vinto bucchin')
}