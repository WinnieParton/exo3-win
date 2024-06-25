function calculate(numbers, operation) {
    if (operation !== '+' && operation !== '*') {
        throw new Error("Operation non prise en compte. Veuillez metionner '+' ou '*' ");
    }

    let total = operation === '+' ? 0 : 1;
    const steps = [];

    numbers.forEach((number, index) => {
        if (operation === '+') {
            total += number;
            steps.push(`${index === 0 ? '' : '+'}${number} (=${total})`);
        } else if (operation === '*') {
            total *= number;
            steps.push(`${index === 0 ? '' : '*'}${number} (=${total})`);
        }
    });

    return { total, steps };
}

module.exports = { calculate };
