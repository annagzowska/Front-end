// function, which returns the word combined from every second letter of the word given

function everySecLetter(text) {
  var result = "";
  for (i = 0; i < text.length; i = i + 2) {
    result += text[i];
  }
  return result;

}

console.log(everySecLetter("loremipsum"));
