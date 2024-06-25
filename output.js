function displayResult(steps, total, operation) {
  steps.forEach((step) => console.log("\t" + step));
  console.log("\t-------");
  console.log(
    `total = ${total} (${operation === "+" ? "addition" : "multiplication"})`
  );
}

module.exports = { displayResult };
