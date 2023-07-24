const fibonacci = function(numPos) {
    if (numPos < 0){
        return "OOPS";
    }
    let firstNum = 0;
    let secondNum = 1;
    for (let i = 1; i<numPos; i++){
        
        let current = firstNum+secondNum;
        firstNum=secondNum;
        secondNum=current;
        
    }
    return secondNum;

};

// Do not edit below this line
module.exports = fibonacci;
