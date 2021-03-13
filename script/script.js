
var btnGenera = document.getElementById('genera');
var btnAnnulla = document.getElementById('annulla');
var offerta = document.getElementById('offerta');
var costo = document.getElementById('costo');
var carrozza = document.getElementById('carrozza');
var codice = document.getElementById('codice');

var costoKm = .21;
var totale = 0;


btnGenera.addEventListener('click', function(){

  var nome = document.getElementById('nome').value;
  var distanza = parseInt(document.getElementById('distanza').value);
  var eta = document.getElementById('eta').value;


  if (eta == 1) {
    totale = ((distanza * costoKm) * 0.8).toFixed(2);
    offerta.innerHTML = '<p>Sconto Minorenne</p>';

  } else if (eta == 2){
    totale = (distanza * costoKm).toFixed(2);
    offerta.innerHTML = '<p>Nessuno Sconto</p>';

  } else if (eta == 3){
    totale = ((distanza * costoKm) * 0.6).toFixed(2);
    offerta.innerHTML = '<p>Sconto Anziani</p>';
  }


  document.getElementById('nomeUser').innerHTML = nome;
  carrozza.innerHTML = Math.floor(Math.random() * 10 ) + 1;
  codice.innerHTML =  Math.floor(Math.random() * 10000 ) + 90000;
  costo.innerHTML = '&euro; ' + totale;

});


btnAnnulla.addEventListener('click', function(){

  document.getElementById('nomeUser').innerHTML = '';
  offerta.innerHTML = '';
  carrozza.innerHTML = '';
  codice.innerHTML =  '';
  costo.innerHTML = '';
  
})
