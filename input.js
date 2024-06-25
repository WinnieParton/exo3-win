const fs = require('fs');
const path = require('path');

function readCSV(fileName) {
    const filePath = path.resolve(__dirname, fileName);
    const data = fs.readFileSync(filePath, 'utf8');
    return data.trim().split('\n').map(Number);
}

module.exports = { readCSV };
