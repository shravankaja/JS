const prompt = require('prompt-sync')()
let inputArray = [];
const numberOfInput = prompt('number of elements')

for (let i = 0; i < numberOfInput; i++) {
    inputArray[i] = prompt('enter number');
}

let finalArray = [];


for (let i = 0; i <= inputArray.length; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}



function isPrime(n) {
    if (n <= 1)
        return false;


    else if (n == 2)
        return true;

    else if (n % 2 == 0)
        return false;


    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0)
            return false;
    }
    return true;
}

