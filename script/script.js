var btnGenera = document.getElementById('genera');
var btnAnnulla = document.getElementById('annulla');
var costoKm = .21;
var totale = 0;
var offerta = document.getElementById('offerta');
var costo = document.getElementById('costo');

btnGenera.addEventListener('click', function(){

  var nome = document.getElementById('nome').value;
  var distanza = parseInt(document.getElementById('distanza').value);
  var eta = document.getElementById('eta').value;

  document.getElementById('nomeUser').innerHTML = nome;

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

  costo.innerHTML = totale;

});

btnAnnulla.addEventListener('click', function(){
})
