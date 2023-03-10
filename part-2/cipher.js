const firstArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
const secondArr = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// pass in "I love cryptography" --- will return "v ybir pelcgbtencul!"

function coder(string) {
    let cipheredStr = '';
    str = string.toLowerCase()
    for (let i = 0; i < str.length; i++) {
            if (firstArr.includes(str[i])) {
            cipheredStr += secondArr[firstArr.indexOf(str[i])]
            } else if (secondArr.includes(str[i])) {
            cipheredStr += firstArr[secondArr.indexOf(str[i])]
            } else {
            cipheredStr += str[i]
        }
    }
    return cipheredStr
}

console.log(coder('I love cryptography!'))

// pass in "v ybir pelcgbtencul!" --- will return "i love cryptography!"

function decoder(string) {
    str = string.toLowerCase()
    decipheredStr = ''
    for (let i = 0; i < str.length; i++) {
        if (firstArr.includes(str[i])) {
            decipheredStr += secondArr[firstArr.indexOf(str[i])]
        } else if (secondArr.includes(str[i])) {
            decipheredStr += firstArr[secondArr.indexOf(str[i])]
        } else {
            decipheredStr += str[i]
        }
    }
    return decipheredStr
}

console.log(decoder('v ybir pelcgbtencul!'))




/* Old Code

const firstArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
const secondArr = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let cipheredStr = ''

function coder(string) {
    str = string.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (secondArr.indexOf(str[i]) !== -1) {
        cipheredStr += firstArr[secondArr.indexOf(str[i])]
        } else if (firstArr.indexOf(str[i]) !== -1) {
        cipheredStr += secondArr[firstArr.indexOf(str[i])]
        }
    }
    return cipheredStr
}

console.log(coder('Ilovecryptography!'))

function decoder(string) {
    str = string.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        let positionOfLetterInFirstArr = firstArr.indexOf(str[i])
        let positionOfLetterInSecondArr = secondArr.indexOf(str[i])
        if (positionOfLetterInFirstArr !== -1) {
            cipheredStr += secondArr[positionOfLetterInFirstArr]
        } else if (positionOfLetterInSecondArr !== -1) {
            cipheredStr += firstArr[positionOfLetterInSecondArr]
        }
    } 
    return cipheredStr
}
console.log(decoder('Vybirpelcgbtencul!'))
*/