// [0,1,1,2,3,5,8,13...]

function fibonacci(n) {
    if (n == 0){
        return [0]
    }
    if (n == 1) {
        return [0, 1]
    }else {
        var fibo = fibonacci(n-1);
        var fibo2 = fibo[n-1] + fibo[n -2];
        fibo.push(fibo2);
        return fibo;
        
    }
}

let result = fibonacci(12);
console.log(result);