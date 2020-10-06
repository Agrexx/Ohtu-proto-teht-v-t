function lottoNumerot()
{
  var lnumerot = [];
  var temp;
  for(var lotto = 0; lotto < 7; lotto++)
{
  temp = Math.floor(Math.random()*40)+1;
  lnumerot[lotto] = temp;
}
  lnumerot.sort(/*function(a, b){return a-b}*/);
  document.getElementById('lotto').innerHTML = '<p>'+lnumerot+'</p>';
}
