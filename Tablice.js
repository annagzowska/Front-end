// function, which calculate sum, avarage and counts the elements of an array

var wynik = 0;
var tablica1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15];

function calculateArr(a) {

  for (i = 0; i < tablica1.length; i++) {
    wynik += tablica1[i];
  }
  console.log("Sum of the array is " + wynik)
  console.log("There are " + a.length + "elements in the array")
  console.log("Average of the array is " + wynik / tablica1.length)

}

calculateArr(tablica1);


// function, which search for a word given in an array

var array1 = ["cos", "siano", "stodola", "igla", "kubek", "biurko"];

function findWord(arr1, word1) {
  for (i = 1; i <= arr1.length; i++) {

    if (word1 === arr1[i - 1]) {

      return "Word " + word1 + " found on position " + i;
    }

  }
  return "I couldn't find word " + word1 + " in the array"
}

findWord(array1, "igla");

