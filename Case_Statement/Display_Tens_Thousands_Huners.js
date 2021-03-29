const prompt = require('prompt-sync')();

const n = prompt('Enter Number');
const choice = prompt("Enter you r choice \n 1. Tens 2. Hunderads 3. Thousands 4. unit ");

switch (choice) {
    case "4":
        console.log("units :" +Math.round(n % 10));
        break;
    case "1":
        console.log("Tens :" + Math.round((n / 10) % 10));
        break;
    case "2":
        console.log("Hundreads" + Math.round((n / 100) % 10));
        break;
    case "3":
        console.log("Thousands :" + Math.round( n / 1000));
        break;
}
