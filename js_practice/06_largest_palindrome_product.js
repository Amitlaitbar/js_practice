let secondMultiplier = 999;
let isProductPalindrome = false;
let palindromeProduct = 0;

while (!isProductPalindrome) {
    for (let firstMultiplier = 999; firstMultiplier > 900; firstMultiplier--) {
        palindromeProduct = firstMultiplier * secondMultiplier;
        let reverseNumber = 0;
        let productCandidate = palindromeProduct;

        while (productCandidate > 0) {
            let remainder = (productCandidate % 10);
            reverseNumber = (reverseNumber * 10) + remainder;
            productCandidate = (productCandidate - remainder) / 10;
        }

        if (reverseNumber == palindromeProduct) {
            isProductPalindrome = true;
            console.log(firstMultiplier);
            break;
        }

    }
    secondMultiplier--;
}

console.log(palindromeProduct);