//function which give's bank balance of a person after providing password
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askBalance = function(pass) { //public function, it has an access to private atribute
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
let answer = prompt("What's your PIN code?")
var myBalance = john.askBalance(answer);
console.log(myBalance);
