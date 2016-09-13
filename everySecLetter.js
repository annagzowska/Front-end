function everySecLetter(text) {
  var result = "";
  for (i = 0; i < text.length; i = i + 2) {
    result += text[i];
  }
  return result;

}

console.log(everySecLetter("loremipsum"));
