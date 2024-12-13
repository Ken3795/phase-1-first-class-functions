// Function to return the first two drivers
 // Function that returns a named function
 function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("This is an anonymous function");
    };
  }
  
  // Array containing the two driver selection functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function to create a fare multiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Function to double the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function to triple the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers
  const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers);
  };
  // Function that receives a function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
 
  