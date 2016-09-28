//functions which returns Fibonacci numbers

function fibNum(howMany){
	let result = [];
  result[0] = 0;
  result[1] = 1;
  
	for(i = 2; i < howMany; i++){
  	result[i] = result[i-1] + result[i-2];
  }
console.log(result);
}

fibNum(9);