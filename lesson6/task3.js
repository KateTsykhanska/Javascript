function createCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}
let counter = createCounter();
let counter1 = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());