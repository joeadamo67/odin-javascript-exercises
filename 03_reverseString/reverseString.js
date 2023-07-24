const reverseString = function(str) {
       let temp = "";

    for (let i = str.length;i>0;i--){
        temp += str.substring(i-1,i);
    }

    return temp;

};

// Do not edit below this line
module.exports = reverseString;
