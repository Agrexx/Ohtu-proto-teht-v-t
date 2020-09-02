function viikonpaiva()
{
    var luku = document.getElementById('luku').value;
    if(luku == '1')
    {
      document.write('maanantai').innerHtml = "Maanantai";
    }
    if(luku == '2')
    {
      document.write('Tiistai').innerHtml = "Tiistai";
    }
    if(luku == '3');
    {
      document.write('Keskiviikko').innerHtml = "Keskiviikko";
    }
    if(luku == '4')
    {
      document.write('Torstai').innerHtml = "Torstai";
    }
    if(luku == '5');
    {
      document.write('Perjantai').innerHtml = "Perjantai";
    }
    if(luku == '6');
    {
      document.write('Lauantai').innerHtml = "Lauantai";
    }
    if(luku == '7');
    {
      document.write('Sunnuntai').innerHtml = "Sunnuntai";
    }
}
