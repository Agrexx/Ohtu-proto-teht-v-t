function kertoma()
{
  var kerLuku = document.getElementById('kertoma').value;
  var laskettu = 1;
for(var z = 1; z <= kerLuku; z++)
{
  laskettu*=z;
}
document.getElementById('tulostus').innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}
