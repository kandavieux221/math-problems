function fibonacci(n) {
    if (n <= 1) return n;
    let previous = 0;
    let current = 1;

    for (let i = 2; i < n; i++) {
        [previous, current] = [current, previous + current];
    }
    return current;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = n * (n - 1);
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
