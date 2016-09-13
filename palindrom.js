function palindrom(slowo) {

  let dlugosc = slowo.length;
  var sprawdz = 0;
  for (i = 0; i <= slowo.length; i++) {


    if (slowo[dlugosc - i - 1] === slowo[i]) {

      sprawdz += 1;
    }

  }

  if (sprawdz >= slowo.length) {
    console.log("S³owo " + slowo + " jest palindromem. Wygra³eœ karton ciastek!.")
  } else {
    console.log("S³owo " + slowo + " nie jest palindromem. Musisz sam kupiæ ciastka :)")
  }

}

palindrom("kajak");