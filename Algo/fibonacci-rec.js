function recFibonacci(n){
    if(n<2) return n;
    return recFibonacci(n-1)+recFibonacci(n-2);
}

console.log(recFibonacci(0))
console.log(recFibonacci(1))
console.log(recFibonacci(6))

// Big-O = O(2^n)