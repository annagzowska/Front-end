function palindrom(slowo) {

  let dlugosc = slowo.length;
  var sprawdz = 0;
  for (i = 0; i <= slowo.length; i++) {


    if (slowo[dlugosc - i - 1] === slowo[i]) {

      sprawdz += 1;
    }

  }

  if (sprawdz >= slowo.length) {
    console.log("S�owo " + slowo + " jest palindromem. Wygra�e� karton ciastek!.")
  } else {
    console.log("S�owo " + slowo + " nie jest palindromem. Musisz sam kupi� ciastka :)")
  }

}

palindrom("kajak");