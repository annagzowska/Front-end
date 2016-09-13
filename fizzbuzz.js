function fizzbuzz() {

    for (i = 1; i <= 100; i++) {

        let _liczba = "";

        if(i%5 === 0){
            _liczba += "buzz";
        }
        
       if(i%3 === 0){
            _liczba += "fizz";
        }
                console.log(i + " " + _liczba);
        
    }
}
fizzbuzz();