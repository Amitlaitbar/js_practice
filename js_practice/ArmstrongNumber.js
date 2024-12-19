const armstrongNumberCandidate = 152;
let sumOfCubeOfDigits = 0;
let mostSignificantDigits = armstrongNumberCandidate;

while(mostSignificantDigits > 0) {
    const remainder = mostSignificantDigits % 10;
    sumOfCubeOfDigits = sumOfCubeOfDigits + (remainder * remainder * remainder);
    mostSignificantDigits = (mostSignificantDigits - remainder) / 10;
}

const isArmstrongNumber = armstrongNumberCandidate === sumOfCubeOfDigits;
console.log("Is Armstrong number?", armstrongNumberCandidate, isArmstrongNumber);
