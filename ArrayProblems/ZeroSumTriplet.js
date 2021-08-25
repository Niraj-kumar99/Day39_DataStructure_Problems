let numbers = [1,2,5,-4,5,7,3,-1,-5,-2,7];
let sum = 0;


for (let i=0;i<=numbers.length;i++){
    for(let j=i+1;j<=numbers.length;j++){
        for(let k=j+1;k <= numbers.length;k++){
            if(numbers[i]+numbers[j]+numbers[k] == sum){
                console.log("Sum of : "+numbers[i]+","+numbers[j]+","+numbers[k]+" = 0")
            }
        }
    }
}