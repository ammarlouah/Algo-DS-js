function climbingStaicase(n){
    const numOfWays = [1,2];
    for(let i=2;i<n;i++){
        numOfWays[i]=numOfWays[i-1]+numOfWays[i-2];
    }
    return numOfWays[n-1];
}

console.log(climbingStaicase(1))
console.log(climbingStaicase(2))
console.log(climbingStaicase(3))
console.log(climbingStaicase(4))
console.log(climbingStaicase(5))

// Big-O = O(n);
