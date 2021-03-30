const prompt = require('prompt-sync')()
const degeree = prompt('enter degree')
const faranhiet = prompt('enter faranhiet')

function convertDegreeToFarenhiet(mem) {

    if (mem > 0 && mem <= 100) {
        let f = mem * 1.8 + 32
        console.log("Given In degrees : " + mem + " in farenhiet : " + f)
    }
}

function convertFaraenhietToDegree(mem) {

    if (mem > 32 && mem <= 212) {
        let f = (mem - 32) * 0.55
        console.log("Given In farenhiet : " + mem + " in degrees : " + f)
    }
}

convertDegreeToFarenhiet(degeree)
convertFaraenhietToDegree(faranhiet)