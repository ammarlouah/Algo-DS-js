function recFactorial(num){
    if(num==0||num==1) return 1;
    return num*recFactorial(num-1);
}

console.log(recFactorial(0))
console.log(recFactorial(1))
console.log(recFactorial(5))

// Big-O = O(n);