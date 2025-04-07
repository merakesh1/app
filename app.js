function isPrime(num) {
    if (num <= 1) {
        return false
    }
    else if (num == 2) {
        return true
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

let start = 10
let end = 40

for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}