let factorial = 1;

function factorialCalculate (number) {
    factorial = factorial * factorialCalculate(number - 1);
    return factorial; 
}

const number = 5;
const factorialResult = factorialCalculate(number);

console.log(factorialResult);
