const palindromeNumberCandidate = 121;
let mostSignificantDigits = palindromeNumber;
let reverseNumber = 0;

while(mostSignificantDigits > 0){
    let remainder = mostSignificantDigits % 10;
    reverseNumber = (reverseNumber*10)+remainder;
    mostSignificantDigits = (mostSignificantDigits - remainder) /10;
 }
console.log(`The Reverse Number Is : ${reverseNumber}`);
let isTheNumberIsPalindrome = reverseNumber === palindromeNumber;
console.log(`Is the number ${palindromeNumber} is plindrome: ${isTheNumberIsPalindrome}`);