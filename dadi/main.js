
let button = document.getElementById('gioca');


button.addEventListener('click',
    function () {

        let giocatore = Math.floor(Math.random() * 6) + 1;
        alert('lancio del giocatore   ' + giocatore);

        let computer = Math.floor(Math.random() * 6) + 1;
        alert('lancio del computer  ' + computer);

    
        if (giocatore > computer) {
            
            alert('vittoria');
            
        }
        else if (giocatore < computer) {
            alert('hai perso');
        }
        else
            alert('pareggio');

    }



)
