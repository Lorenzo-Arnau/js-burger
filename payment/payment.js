var nome = document.getElementById('name');
var cognome = document.getElementById('cognome');
var indirizzo = document.getElementById('indirizzo');
var creditCard = document.getElementById('card');
var paymentComplete =  document.getElementById('acquista');
var costo = document.getElementById('prezzo-finale');


paymentComplete.addEventListener('click',function(){
  if (creditCard.value === '' || creditCard.value.length !== 16 ||  isNaN(parseInt(creditCard.value))) {
    alert('it is necessary to insert a valid card to continue the payment')
  }else{
    if (nome.value === '' || cognome.value === '' || indirizzo.value === '') {
      alert('fill in each field to proceed with the payment')
    }else {
      // parte riservata al backend,per i dati del pagamento da inviare al server
      console.log(creditCard.value);
      console.log(nome.value);
      console.log(cognome.value);
        // parte riservata al backend,per i dati del pagamento da inviare al server
      alert('Payment in progress ... Thanks '+ nome.value +' '+ cognome.value +'! your products will be shipped to this address '+ indirizzo.value +' as soon as possible! redirect to the main screen, thanks for purchasing from us! see you next time! All Your Burger Staff')
      location.href = "../index.html";
    }

}

})
