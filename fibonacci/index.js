// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let firstNumber = 1;
    let secondNumber = 1;
    let next = firstNumber + secondNumber;
    for (i = 2; i < n; i++) {
        next = firstNumber + secondNumber
        firstNumber = secondNumber;
        secondNumber = next;
    }
    return next;
}

function memoize(fn) {
    const cache = {}
    return function (...args) {
        if (cache[args]) {
            return cache[args]
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function fibRecursive(n) {
    if (n < 2) return n;
    const first = fibRecursive(n - 1);
    const second = fibRecursive(n - 2);
    return first + second;
}

module.exports.fib = fib;
module.exports.fibRecursive = memoize(fibRecursive);