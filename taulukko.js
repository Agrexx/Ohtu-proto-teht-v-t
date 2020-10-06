function taulukko()
{
  var v = [];
  v = [[2, 4, 3, 12], [9, 14, 2, 7], [6, 5, 2, 23], [8, 9, 28, 11], [6, 14, 20, 7]];
  var taulukko = '<table border="1">';
  for(var a = 0; a < v.length; a++)
{
    taulukko += '<tr>';
    for(var b = 0; b < v[a].length; b++)
  {
    taulukko += '<td>' + v[a][b] + '</td>';
  }
    taulukko += '</tr>';
  }
   taulukko += '</table>';
   document.getElementById('taulukko').innerHTML = taulukko;
}
