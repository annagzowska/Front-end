function palindrom(slowo) {

  let dlugosc = slowo.length;
  var sprawdz = 0;
  for (i = 0; i <= slowo.length; i++) {


    if (slowo[dlugosc - i - 1] === slowo[i]) {

      sprawdz += 1;
    }

  }

  if (sprawdz >= slowo.length) {
    console.log("Slowo " + slowo + " jest palindromem. Wygrales karton ciastek!.")
  } else {
    console.log("Slowo " + slowo + " nie jest palindromem. Musisz sam kupic ciastka :)")
  }

}

palindrom("kajak");
