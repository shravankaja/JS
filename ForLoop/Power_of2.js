const promt = require('prompt-sync')();
const number = promt('enter number')

for (let i = 0; i <= number; i++) {
    console.log(Math.pow(2, i))
}
