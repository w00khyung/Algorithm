const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input);

function solution(n) {
  // Write your code
}
