const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim()

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const answer = ALPHABET.split('').map((el) => input.indexOf(el)).join(' ');

console.log(answer);