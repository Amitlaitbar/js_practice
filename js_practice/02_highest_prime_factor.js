const number = 45;
let numberCandidate = number;
let highestPrimeFactor = 0;

for (let primeFactorCandidate = 2; primeFactorCandidate <= number; primeFactorCandidate++) {

    while ((numberCandidate % primeFactorCandidate) == 0) {
        numberCandidate = (numberCandidate / primeFactorCandidate);
        highestPrimeFactor = primeFactorCandidate;
    }
}
        
console.log(highestPrimeFactor);
