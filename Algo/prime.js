function isPrime(num){
    if(num<2) return false;
    for(let i=2;i<=Math.sqrt(num);i++){ //One devider is always smaller or equale to the square root
        if(num%i==0) return false;
    }
    return true;
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))
console.log(isPrime(9))
console.log(isPrime(7))
console.log(isPrime(997))

// Big-O = O(sqrt(n))