// costanti
var prezzoBase=50;
var scontoPrecentuale=20;
var listaCoupon = ['THURSDAY20','MONDAY20','WEDNESDAY20'];
var totaleSelezionato = 0;
// costanti

var allPage = document.getElementsByClassName('container')[0];
var lessIngredients;
var refreshCart = document.getElementById('refresh');
var cart = document.getElementsByClassName('cart')[0];
var ingredients = document.getElementsByClassName('cart')[0].getElementsByTagName('ul')[0];
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
    alert('Enter a name for your Hamburger')
    total.innerText ='0';
  }else if(nomeHamburger.value != ''){
// ----------------------------------------------------------------------------------------------------
    // dobbiamo far si che l'utente selezioni almeno due ingredienti,attribuire un valore a ogni ingrediente che serviranno poi per la somma del totale

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
      alert('choose at least two ingredients, otherwise it tastes nothing!');
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
// --------------------------------------------------------------
    ingredients.innerHTML = '<li>'+'BREAD'+'</li>';
    ingredients.innerHTML += '<li>'+'MEAT'+'</li>';
   for (var i = 0; i < tuttiIngredienti.length; i++) {
    ingredients.innerHTML += '<li>'+tuttiIngredienti[i].toUpperCase()+'</li>'
   }
   tuttiIngredienti=[];
   cart.style.visibility = 'visible';
//    ---------------------------------------------------------------------------------------------
   paymentButton.style.visibility = 'visible';
   totaleSelezionato = 0;
 });
  // SEZIONE BONUS
  refreshCart.addEventListener('click',function() {
    ingredients.innerHTML = '<li>'+'BREAD'+'</li>';
    ingredients.innerHTML += '<li>'+'MEAT'+'</li>';
    total.innerText = '0';
  });
  //creo un pulsante di pagamento
  paymentButton.addEventListener('click',function() {
    if (total.innerText === '0') {
      alert('Attention, it is not possible to continue the purchase because the total is 0 dollars')
    }else{
    alert('Redirect to the payment page in progress');
    location.href = "payment/payment.html";
  }
  });

  // Inserisco un evento al caricamento della pagina, in modo che si possa inserire uno splash screen in un secondo momento
  document.addEventListener("DOMContentLoaded", function() {
   allPage.style.opacity = 1;
   console.log('pagina caricata correttamente');
  });
