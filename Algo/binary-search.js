function binarySearch(arr,target){
    if(arr.length===0) return -1;
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let middle = Math.floor((start+end)/2);
        if(target===arr[middle]) return middle;
        if(target > arr[middle]){
            start = middle + 1;
        }else{
            end = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch([-5,2,4,6,10],10))
console.log(binarySearch([],10))
console.log(binarySearch([-5,2,4,6,10],6))
console.log(binarySearch([-5,2,4,6,10],20))

// Big-O = O(logn);