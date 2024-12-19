const automorphicNumber = 5;
let automorphicNumberCandidate = automorphicNumber;
let numberOfDigitsCandidate = 1;

while (automorphicNumberCandidate > 10) {
    numberOfDigitsCandidate    = numberOfDigitsCandidate + 1;
    automorphicNumberCandidate = (automorphicNumberCandidate - (automorphicNumberCandidate % 10)) / 10;
}

let divisorCandidate  = (10 ** numberOfDigitsCandidate);
const isItAutomorphic = (((automorphicNumber ** 2) % divisorCandidate) == automorphicNumber);

let isAutomorphic;
isItAutomorphic ? isAutomorphic = true : isAutomorphic = false;

console.log("The Number Is Automorohic:", isAutomorphic);