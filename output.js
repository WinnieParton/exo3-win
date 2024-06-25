function displayResult(steps, total, operation) {
    steps.forEach(step => console.log(step));
    console.log('-------');
    console.log(`total = ${total} (${operation === '+' ? 'addition' : 'multiplication'})`);
}

module.exports = { displayResult };
