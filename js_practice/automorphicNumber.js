const automorphicNumberCandidate  = 5;
let mostSignificantDigits = automorphicNumberCandidate;
let lastSignificantDigits =0;

const squreOfNumber = (automorphicNumberCandidate * automorphicNumberCandidate);

while(mostSignificantDigits > 0){
     let remainder = mostSignificantDigits % 10;
     mostSignificantDigits = (mostSignificantDigits - remainder)/10;
     lastSignificantDigits++;
}





console.log(automorphicNumberCandidate,"Is a automorphic NUmber:",true);

