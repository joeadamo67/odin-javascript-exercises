const palindromes = function (str) {
    
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.replace(/\s+/g, '');
    str = str.toLowerCase();

    let reverseStr = str.split("").reverse().join("");

    if (str === reverseStr){
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
