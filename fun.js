// console.log('hii');
// let i = 0;

// const value = test(30 , 10);

// function test (a, b) {
//    i += b;
//    return a + i;
// }

// console.log(i);
// console.log('hello');

// let result = test (i , 45);

// console.log(value);
// console.log(result);
// console.log(i);


// const a = 12;
// const b = 13;

// console.log('a = ', a);
// console.log('b = ', b);

// const result = exchangingFunction(b, a);

// function exchangingFunction(a, b) {
//     console.log('a = ', a);
//     console.log('b = ', b);
//     return a + b;
// }

// console.log(result);


// let a = 12;

// let result = +a;
// a = null;
// console.log(result);
// console.log(a);

// console.log(typeof a);
// console.log(typeof result);


function hello() {
    function welcome() {
        console.log('welcome');
    }
    welcome();
    console.log('hello');
}

hello();

const inputString = 'repeating iiiiiiii'; const inputSubString = 'iii';

function isSubstring(string, subString) {

    let isSubStrPresent = false;
    let index = subString !== '' ? 0 : string.length;

    while (!isSubStrPresent && index <= string.length - subString.length) {
        let startIndex = 0 + index;
        const endIndex = startIndex + subString.length;
        let subStringCandidate = '';
        const isCharPresent = subString[0] === string[startIndex];

        while (isCharPresent && startIndex < endIndex) {
            subStringCandidate += string[startIndex];
            startIndex++;
        }
        isSubStrPresent = subStringCandidate === subString;
        index++;
    }

    return isSubStrPresent;
}

const result = isSubstring(inputString, inputSubString);
console.log(result);




