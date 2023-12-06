
// Variabile Associata al button

let buttonInvio = document.querySelector('.btn')
console.log('button',buttonInvio, typeof buttonInvio)

// Creo l'array

const emailList = [
    'ciao@gmail.com',
    'helo@gmail.com',
    'nein@gmail.com',
    'averdonf@gmail.com',
    'popò@gmail.com',
];

buttonInvio.addEventListener('click',function(){
    // Variabile Associata all'input email
    let emailInput = document.getElementById('email').value
    console.log('pippo',emailInput,typeof emailInput);

    let controllo = false;
    
    for (let i = 0; i < emailList.length; i++) {

        

        if (emailInput == emailList[i]) {

            controllo = true;

        }
        
        console.log('fatto',emailList[i])
    }
    if(controllo == true){

        alert('ENTRAH')

    }
    else{

        alert('NON ENTRAH (meme del vecchietto pompato)')

    }


});