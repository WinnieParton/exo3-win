const { calculate } = require('./calculations');

function testCalculate() {
    // Test d' addition
    let numbers = [1, 2, 3];
    let operation = '+';
    let result = calculate(numbers, operation);
    console.assert(result.total === 6, `Expected 6, but got ${result.total}`);
    console.assert(JSON.stringify(result.steps) === JSON.stringify([
        '1 ',
        '+2 (=3)',
        '+3 (=6)'
    ]), `Steps are incorrect: ${JSON.stringify(result.steps)}`);

    // Test de multiplication
    operation = '*';
    result = calculate(numbers, operation);
    console.assert(result.total === 6, `Expected 6, but got ${result.total}`);
    console.assert(JSON.stringify(result.steps) === JSON.stringify([
        '1 ',
        '*2 (=2)',
        '*3 (=6)'
    ]), `Steps are incorrect: ${JSON.stringify(result.steps)}`);

    // Test operation non prise en compte
    operation = '-';
    let errorCaught = false;
    try {
        calculate(numbers, operation);
    } catch (error) {
        errorCaught = true;
        console.assert(error.message === 'Unsupported operation', `${error.message}`);
    }
    console.assert(errorCaught, 'Expected error, but none was thrown');

    console.log('All tests passed.');
}

testCalculate();
