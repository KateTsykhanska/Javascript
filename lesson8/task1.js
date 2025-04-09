const calculator = {
    add: function (a, b) {
        this.lastResult = a + b;
        this.operationsCount++;
        return this.lastResult;
    },
    subtract: function (a, b) {
        this.lastResult = a - b;
        this.operationsCount++;
        return this.lastResult;
    },
    multiply: function (a, b) {
        this.lastResult = a * b;
        this.operationsCount++;
        return this.lastResult;
    },
    divide: function (a, b) {
        this.lastResult = a / b;
        this.operationsCount++;
        return this.lastResult;
    },
    lastResult: null,
    operationsCount: 0
}

const lastResult = calculator.divide(15, 5);
console.log('Result is ' + lastResult);
console.log('Amount of operations is ' + calculator.operationsCount)