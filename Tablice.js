// function, which calculate sum, avarage and counts the elements of the table

var wynik = 0;
var tablica1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15];

function calculateTable(a) {

  for (i = 0; i < tablica1.length; i++) {
    wynik += tablica1[i];
  }
  console.log("Sum of the table is " + wynik)
  console.log("There are " + a.length + "elements in a table")
  console.log("Average of the list is " + wynik / tablica1.length)

}

calculateTable(tablica1);


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

