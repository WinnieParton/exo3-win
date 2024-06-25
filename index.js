const { readCSV } = require('./input');
const { calculate } = require('./calculations');
const { displayResult } = require('./output');

function main() {
    const [,, fileName, operation] = process.argv;

    if (!fileName || !operation) {
        console.error('node index.js <fileName> <operation>');
        process.exit(1);
    }

    try {
        const numbers = readCSV(fileName);
        const { total, steps } = calculate(numbers, operation);
        displayResult(steps, total, operation);
    } catch (error) {
        console.error(error.message);
    }
}

main();
