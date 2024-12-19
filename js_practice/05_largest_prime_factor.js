const primeNumber = 600851475143;
let highestPrimeFactor = 0;
let primeNumberCandidate = primeNumber;
let factor;
for (factor = 2; factor < (primeNumber / 2); factor++) {
    while ((primeNumberCandidate % factor) === 0){
        primeNumberCandidate = primeNumberCandidate / factor;
        highestPrimeFactor = factor;
    }
}
console.log(highestPrimeFactor);