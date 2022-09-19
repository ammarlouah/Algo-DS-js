function factorial(num){
    if(num < 0 ) return `Please enter a positive number`;
    let res = 1;
    for(let i=2;i<=num;i++){
        res*=i;
    }
    return res;
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))

// Big-O = O(n);