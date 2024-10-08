let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];
let expectedResult = [40590, 148200, 25709]
   
   function calculateExpences(expencesArray) {
    let sum = 0;
     for(monthExp of expencesArray) {
        if (monthExp > 1000){
        sum += monthExp;
    } else if(monthExp < 1000){
       let monthNumber = expencesArray.indexOf(monthExp)
       let date = new Date(0, monthNumber);
       console.log(monthNumber, date.toLocaleString("en-GB", {month:"short"}))
    }
    }
     return sum;
} 



function testCalculationExp(expectedResult, expencesArray) {
   let actualResult = calculateExpences(expencesArray)
   if (actualdResult === expectedResult) {
       console.log(`${actualResult} vs${expectedResult} correct calculation`)
    } else {
        console.log(`${actualResult} vs${expectedResult} incorrect calculation`)
    }
}

expencesExamples.forEach((expenceEx, index) => {
    testCalculationExp(expectedResult[index],expenceEx.yearlyExpences)
})

// let timestamp = Date.now();
// let date = new Date(timestamp);

// console.log(date.toLocaleString("en-GB", {month:"short"}))