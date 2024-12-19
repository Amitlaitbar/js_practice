let sumOfSquares = 0;
for (let number = 1; number <= 100; number++) {
    let squareCandidate = number * number;
    sumOfSquares = sumOfSquares + squareCandidate;
}

let numberSumCandidate = (100 / 2) * 101;

const difference =(numberSumCandidate * numberSumCandidate) - sumOfSquares;
console.log(difference);
