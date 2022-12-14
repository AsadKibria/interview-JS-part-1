

// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[6] = fibo[6-1] + fibo[6-2];
// fibo[n] = fibo[n-1] + fibo[n-2];


// ==== iterative way ====

// function fibonacci (n) {
//         var fibo =[0, 1];
//         for (let i = 2; i <= n; i++) {
//                 fibo[i] = fibo[i-1] + fibo[i-2];            
//     }
//     return fibo;
// }
// const result = fibonacci(12);
// console.log(result);


/*
//====while loop=====
var fibo =[0, 1];
let i = 2; 
while (i <= 12) {
        fibo[i] = fibo[i-1] + fibo[i-2]; 
         console.log(fibo[i], fibo[i-1], fibo[i-2]);
        i++;
    }
*/


// ==== Recursive way =====

function fibonacci (n) {
    if (n == 0) {
        return 0;
    } else if (n == 1){
        return 1;
    } else {
        return fibonacci (n-1) + fibonacci (n-2);
    }

}

const result = fibonacci(12);
console.log(result);
