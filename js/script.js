// costanti
var prezzoBase=50;
var scontoPrecentuale=20;
var listaCoupon = ['MARTEDI20','LUNEDI20','MERCOLEDI20'];
var totaleSelezionato = 0;
// costanti

var lessIngredients;
var cart = document.getElementsByClassName('cart')[0];
var listSelected = document.getElementsByClassName('cart')[0].getElementsByTagName('ul');
var paymentButton = document.getElementById('payment');
var nomeHamburger = document.getElementById('nome-hamburger');
var listeIngredienti = document.getElementsByClassName('liste')[0].getElementsByTagName('input');
var cupon = document.getElementById('cupon');
var go = document.getElementsByTagName('button')[0];
var total =document.getElementById('prezzo-finale');
go.addEventListener('click',function() {
// ----------------------------------------------------------------------------------------------------
  // dobbiamo far si che il nome sia obbligatorio,in caso la stinga dell'input sia vuota Alert()
  if (nomeHamburger.value == '') {
    alert('Inserisci un nome per il tuo Hamburger')
    total.innerText ='0';
  }else if(nomeHamburger.value != ''){
// ----------------------------------------------------------------------------------------------------
    // dobbiamo far si che l'utente selezioni almeno due ingredienti,attribuire un valore a ogni ingrediente che serviranno poi per la somma del totale
// TODO: attenzione rimuovere tuttiIngredienti
    var flag = 0;
    var ingredientiSelezionati =[];
    var tuttiIngredienti =[];
    for (var i = 0; i < listeIngredienti.length; i++) {
      if (listeIngredienti[i].checked === true) {
        flag += 1;
        ingredientiSelezionati.push(parseInt(listeIngredienti[i].value));
        tuttiIngredienti.push(listeIngredienti[i].name);
      }
    }
    for (var i = 0; i < ingredientiSelezionati.length; i++) {
    totaleSelezionato += ingredientiSelezionati[i]
    }

    if (flag < 2) {
      alert('scegli almeno due ingredienti,altrimenti non sa di niente!');
      total.innerText ='0';
      lessIngredients = true;
    }else {
      lessIngredients = false;
    }
  }
  // ----------------------------------------------------------------------------------------------------
  // devo creare un array di stringhe contenenti coupon,se quello che inserisce l'utente è tra questi sconto secco del 20%
  var cuponEsistente = false;
  for (var i = 0; i < listaCoupon.length; i++) {
    if (cupon.value === listaCoupon[i]) {
      cuponEsistente = true;
    }
  }
  // ----------------------------------------------------------------------------------------------------
  // sul pulsante ci sarà una forma onclick che darà via alla somma del prezzo degli ingredienti scelti e riporterà il toytale nel div presente nel footer, in caso ci sia anche il copon,darà il valore scontato;
   var sconto;
   if (lessIngredients === false && cuponEsistente !== true) {
     total.innerText = prezzoBase + totaleSelezionato;
   }else if(lessIngredients === false && cuponEsistente === true){
     sconto = ((prezzoBase + totaleSelezionato) * scontoPrecentuale) / 100;
     total.innerText = prezzoBase + totaleSelezionato - sconto;
   }
   paymentButton.style.visibility = 'visible';
   cart.style.visibility = 'visible';
   totaleSelezionato = 0;
  });
  // SEZIONE BONUS

  //creo un pulsante di pagamento
  paymentButton.addEventListener('click',function() {
    alert('Reindirizzamento alla pagina di pagamento in corso');
    location.href = "payment/payment.html";
  });
