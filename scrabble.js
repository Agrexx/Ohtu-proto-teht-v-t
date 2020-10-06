function laske()
{
  var piste = 0;
  var pisteytettäväSana = document.getElementById('scrabble').value;
  for(var i = 0; i < pisteytettäväSana.length; i++)
  {
    switch (pisteytettäväSana[i])
    {
      case 'a': case 'e': case 'i': case 'n': case 's': case 't': case 'A': case 'E': case 'I': case 'S': case 'T':
      piste++;
      break;
      case 'o': case 'ä': case 'k':  case 'l':  case 'O':  case 'Ä':  case 'K':  case 'L':
        piste+=2;
        break;
      case 'u':  case 'm':  case 'U':  case 'M':
        piste+=3;
        break;
      case 'y':  case 'h':  case 'j':  case 'p':  case 'r':  case 'v':  case 'Y':  case 'H':  case 'J':  case 'P':  case 'R':  case 'V':
        piste+=4;
        break;
      case 'ö':  case 'd':  case 'Ö':  case 'D':
        piste+=7;
        break;
      case 'b':  case 'f':  case 'g':  case 'B':  case 'F':  case 'G':
        piste+=8;
        break;
      case 'c':  case 'C':
        piste+=10;
        break;
      default:
        piste+=12;
    }
    document.getElementById('scrbl').innerHTML = "<p>Sanan " + pisteytettäväSana + " pisteet ovat: " + piste + "</p>";
  }
}
