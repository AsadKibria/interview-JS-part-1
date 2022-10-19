// 10! = 1 *2*3*4*5*6*7*8*9*10
// 0! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4

// 4! = (4-1)!4
// 5! = (5-1)!5
// 6! = (6-1)!6
// 7! = (7-1)!7
// 8! = (8-1)!8
// n ! = (n-1)!n


// ==== Recursive =====

function factorial (n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(3);
console.log(result);






