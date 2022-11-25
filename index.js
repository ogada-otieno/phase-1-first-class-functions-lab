// returnFirstTwoDrivers(): should return a new array containing the first two drivers from the passed-in array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function () {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// console.log(selectingDrivers[0](drivers));
// console.log(selectingDrivers[1](drivers));

// This is a higher-order function that takes in one argument, an integer, 
// and returns a function that will multiply a fare for a ride accordingly. 
// For example, if createFareMultiplier() receives an argument of 4, 
//it will return a function that takes in a fare as an argument and quadruples the fare.


function createFareMultiplier(fareValueMultiplier) {
     return function (fare) {
        return fareValueMultiplier * fare;
     };
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function... 
// ... accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);

// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
//Invoke createFareMultiplier() in such a way that the new fareTripler() function... 
// ...accepts a fare as its lone argument and triples it.

const fareTripler = createFareMultiplier(3)

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() 
// ...or returnLastTwoDrivers() function. 
// Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers()
}