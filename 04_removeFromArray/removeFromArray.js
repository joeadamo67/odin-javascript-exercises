const removeFromArray = function(...args) {
 
    const array = args[0];
    return array.filter(x => !args.includes(x));




};


// Do not edit below this line
module.exports = removeFromArray;
