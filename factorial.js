// 10! = 1 *2*3*4*5*6*7*8*9*10

function factorial (n) {  
let fact =1;
for (let i = 1; i <=n; i++) {
    fact = fact * i;
    console.log(i, fact )
    
}
}
factorial(10);

/*
// ====while====
let fact = 1;
let i = 1;
while (i <= 5) {
    fact = fact * i;
    console.log(i, fact)
    i++
}
*/
