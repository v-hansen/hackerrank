/*
https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    let sumMin = 0;
    let sumMax = 0;
    const order = arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        sumMax += order[i];
    }
    for (let i = 0; i < arr.length - 1; i++) {
        sumMin += order[i];
    }
    console.log(sumMin, sumMax);
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

