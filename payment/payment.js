var nome = document.getElementById('name');
var cognome = document.getElementById('cognome');
var indirizzo = document.getElementById('indirizzo');
var creditCard = document.getElementById('card');
var paymentComplete =  document.getElementById('acquista');
var costo = document.getElementById('prezzo-finale');


paymentComplete.addEventListener('click',function(){
  if (creditCard.value === '' || creditCard.value.length !== 16 ||  isNaN(parseInt(creditCard.value))) {
    alert('è necessario inserire una carta valida per proseguire nel pagamento')
  }else{

    if (nome.value === '' || cognome.value === '' || indirizzo.value === '') {
      alert('compila ogni campo per procedere al pagamento')
    }else {
      alert('Pagamento in corso...Grazie '+ nome.value +' '+ cognome.value +'! i tuoi prodotti verranno spediti a questo indirizzo '+ indirizzo.value +' al più presto! reinderizzamento alla schermata principale,grazie per aver acquistato da noi! alla prossima!')
      location.href = "../index.html";
    }

}

})
