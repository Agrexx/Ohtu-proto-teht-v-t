function tulosta()
{
  var kym = '<p>';
    for(var e = 1; e <=10; e++)
    {
      kym += e + ' ';
    }
    kym += '</p>';
    document.getElementById('tulostus').innerHTML = kym;
}
