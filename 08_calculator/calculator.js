const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arrayOfNums) {
	let total = 0;
  arrayOfNums.map(x => total+=x);
  return total;
};

const multiply = function(arrayOfNums) {
  let total = 1;
  arrayOfNums.map(x => total*=x);
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }


  let total = num;
  for (let i = num-1; i > 0; i--){


    total *= i;
  }


	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
