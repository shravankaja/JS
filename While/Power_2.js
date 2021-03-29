const prompt = require('prompt-sync')()
const number = prompt('Enter number')

let pow = 0;
let i = 0;
while (pow < 256) {
    for (let i = 0; i <= number; i++) {
        pow = Math.pow(2, i);
        console.log(pow);
    }
}