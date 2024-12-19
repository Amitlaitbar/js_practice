const perfectNumberCandidate = 28;
let factorCandidate =1;
let sumOfFactors =0;
let isAPerfectNumber = true;

if(perfectNumberCandidate > 1){
 while(factorCandidate < perfectNumberCandidate){
        if((perfectNumberCandidate % factorCandidate)== 0){
            sumOfFactors = sumOfFactors + factorCandidate ;
        }
    factorCandidate ++;
    }
    isAPerfectNumber = sumOfFactors === perfectNumberCandidate;
console.log("Is The Number",perfectNumberCandidate,"is A Perfect Number:",isAPerfectNumber);
} else {
    console.log("Is The Number",perfectNumberCandidate,"is A Perfect Number:",isAPerfectNumber);    
}