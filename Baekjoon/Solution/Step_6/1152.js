const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim();

const sentence = input.split(' ');

console.log(sentence[0] === '' ? 0 : sentence.length);