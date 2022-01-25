
const emailUtente = ['j.a@gmail.com','j.b@gmail.com', 'j.c@gmail.com'];

const Email = prompt('Inserisci la tua Email');

let login = false;


for (let i = 0; i<emailUtente.length; i++) {

    if (emailUtente[i] == Email) {
       
         login = true;
    } 
       
}

if(login == true){
    alert('sei autorizzato ad accedere al sito');
}

else{
    alert('non sei autorizzato');
}



