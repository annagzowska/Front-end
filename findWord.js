// function, which search for a word given in a table

var table1 = ["cos", "siano", "stodola", "igla", "kubek", "biurko"];

function findWord(tab1, word1) {
  for (i = 1; i <= tab1.length; i++) {

    if (word1 === tab1[i - 1]) {

      return "Word " + word1 + " found on position " + i;
    }

  }
  return "I couldn't find word " + word1 + " in a table"
}

findWord(table1, "igla");

// // function, which sums the elements of the table

function sumTable(a) {
  var result = 0;
  for (i = 0; i < a.length; i++) {
    result += a[i];
  }
  return result;

}

console.log(sumTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
