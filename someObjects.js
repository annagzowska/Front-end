//some things done with objects

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

for(var x in languages) {
    if (typeof languages[x] === "string") {
        console.log(languages[x]);
    } 
};

///////////////////////////////////////////////////////////////////////////

function Dog (breed) {
    this.breed = breed;
};

Dog.prototype.sayHello = function(){
    console.log("Hello this is a " + this.breed + " dog");
};


var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

//////////////////////////////////////////////////////////////////

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
};

Penguin.prototype = new Animal();

var penguin = new Penguin("white");

penguin.sayName();

function Emperor(name) {
    this.name = name;
};
Emperor.prototype = new Penguin();

var emperor = new Emperor("name");
console.log(emperor.numLegs);
