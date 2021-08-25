let MAXCOUNT = 10;
let count = 0;
let temp = 0;
const number = [];

while ( count < MAXCOUNT ) {
    number[count] = Math.floor ( Math.random() * 900) + 100;
    count++;
}
console.log("Random numbers: " +number);

function getSecondLargestNumber(array) {
    // let 1st value is the largest one so
    // so we go on comparing rest of all with 1st one 
    // if we get a next greater value then start comparing with it .
    let largestNumber = number[0];
    let secondLargestNumber = largestNumber;
    
    // now start iteration over the array
    for(let i=0 ; i< number.length ; i++) {

        //now on every iteration we will check t
        //he current eliment is greater than the largest number .
        if(number[i] > largestNumber) {

            // if the if loop is true then
            // then we will assign that largest
            // value to the largestNumber .
            largestNumber = number[i];
        }
        else if (number[i] > secondLargestNumber) {
            secondLargestNumber = number[i];
        }
    }
    console.log("Second Largest Number : "+secondLargestNumber);
}

function getSecondSmallestNumber(array) {
    // let 1st value is the largest one so
    // so we go on comparing rest of all with 1st one 
    // if we get a next greater value then start comparing with it .
    let smallestNumber = number[0];
    let secondSmallestNumber = smallestNumber;
    
    // now start iteration over the array
    for(let i=0 ; i< number.length ; i++) {

        //now on every iteration we will check t
        //he current eliment is greater than the largest number .
        if(number[i] < smallestNumber) {

            // if the if loop is true then
            // then we will assign that largest
            // value to the largestNumber .
            smallestNumber = number[i];
        }
        else if (number[i] < secondSmallestNumber) {
            secondSmallestNumber = number[i];
        }
    }
    console.log("Second Smallest Number : "+secondSmallestNumber);
}

getSecondLargestNumber(number);
getSecondSmallestNumber(number);
