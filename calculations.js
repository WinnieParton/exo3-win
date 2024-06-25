function calculate(numbers, operation) {
    if (operation !== '+' && operation !== '*') {
        throw new Error(`Operation ${operation} n'est pas prise en compte. Veuillez mentionner '+' ou '*' `);
    }

    let total = operation === '+' ? 0 : 1;
    const steps = [];

    numbers.forEach((number, index) => {
        if (operation === '+') {
            total += number;
            steps.push(`${index === 0 ? '' : '+'}${number} ${index === 0 ?'':'(='+total+')'}`);
        } else if (operation === '*') {
            total *= number;
            steps.push(`${index === 0 ? '' : '*'}${number} ${index === 0 ?'':'(='+total+')'}`);
        }
    });

    return { total, steps };
}

module.exports = { calculate };
