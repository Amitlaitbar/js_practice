const endRange = 4000000;

let secondPrevNumber = 1;
let firstPrevNumber = 2;
let currentNumber = 0;
let sumOfEvenTerm = 0;


while(secondPrevNumber < endRange){
    if((firstPrevNumber % 2) == 0){
        sumOfEvenTerm += firstPrevNumber;
    }
    currentNumber = secondPrevNumber + firstPrevNumber;
    secondPrevNumber = firstPrevNumber;
    firstPrevNumber = currentNumber; 
}
console.log(sumOfEvenTerm);