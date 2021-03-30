const prompt = require('prompt-sync')()


const number = parseInt(prompt('Enter a positive integer: '));

let value = isPrime(number);
if(value) {
    console.log('prime number')
    let str= number.toString();
    let plain = checkPalindrome(str)
    if(!plain==null)
    {
        let n=parseInt(plain);
        let v = isPrime(n);
        console.log(v);
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

function checkPalindrome(str) {
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            console.log('It is not a palindrome');
        }
        console.log("Palinrome")
        return str;
  }
}

