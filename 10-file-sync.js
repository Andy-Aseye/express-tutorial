const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')

console.log(first);

const second = readFileSync('./content/second.txt', 'utf8')

console.log(second);


writeFileSync('./content/resultText.txt', `Here is the result text: ${first} and ${second}`, {flag: 'a'})