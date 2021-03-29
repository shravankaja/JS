const prompt = require('prompt-sync')();

const n= prompt('Enter Number');

let u;
let t;
let h;
let th;

    u=n%10; 
    t=(n/10)%10; 
    h=(n/100)%10; 
    th=n/1000;
    
console.log("units : " + u + "tens :" + Math.round(t) + "Hunderads :" + Math.round(h) + "Thousands :"+Math.round(th));