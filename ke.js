function laskeYhteen()
{
  yhteensa = 0;
 for(var y = 1; y <=10; y++)
 {
   yhteensa += y;
 }
 document.getElementById('yhteenLasku').innerHTML = '<p>'+ yhteensa + '</p>';
}
