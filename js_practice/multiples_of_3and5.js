const endRange = 1000;
let sumOfMultiples = 0;

for (let numberToCheck = 3; numberToCheck < endRange; numberToCheck++) {
    const isDivisibleBy3or5 = (numberToCheck % 3 === 0) || (numberToCheck % 5 === 0);
    isDivisibleBy3or5 ? sumOfMultiples += numberToCheck : 0;
}
console.log(sumOfMultiples);