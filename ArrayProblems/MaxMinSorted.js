 let MAXCOUNT = 10;
 let count = 0;
 let temp = 0;
 const number = [];
 
 while ( count < MAXCOUNT ) {
     number[count] = Math.floor ( Math.random() * 900) + 100;
     count++;
 }
 console.log("Random numbers: " +number);

 number.sort();
 console.log("Sorted numbers: "+number);