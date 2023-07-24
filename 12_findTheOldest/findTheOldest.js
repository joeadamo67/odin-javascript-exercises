const findTheOldest = function(peopleList) {

    let oldest;

    peopleList.forEach(person => {
        let age;
        if (oldest === undefined){
            oldest = person;
        } else if (person.yearOfDeath == undefined){
           age = ((new Date().getFullYear())-person.yearOfBirth);  
        }  else {
           age = person.yearOfDeath-person.yearOfBirth;
        }


        if (oldest.yearOfDeath == undefined){
            if ((((new Date().getFullYear())-oldest.yearOfBirth) ) < age){
                oldest = person;        
            }
         } else if ((oldest.yearOfDeath-oldest.yearOfBirth ) < age){
            oldest = person;        
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;