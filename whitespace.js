//function, which adds whitespaces between every letter of the text given

function whiteSpace(str) {
    _temp = str.split("").join(" ");
	//console.log(_temp.length);
    return _temp;
}
console.log(whiteSpace("|some text provided by you|"));



//or a bit more complicated way

function whiteSpace(str) {
  let text = "",
    temp = str.split(""),
    blank = " ";

  for (i = 0; i < str.length - 1; i++) {
    text += temp[i] + blank;
  }
  text = text + temp[temp.length - 1];
	//console.log(text.length);
  return text;
}
console.log(whiteSpace("|some text provided by you|"));
