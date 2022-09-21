function recBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1);
}

function search(arr,target,start,end){
    if(start>end) return -1;
    let middle = Math.floor((start+end)/2);
    if(target===arr[middle]) return middle;
    if(target < arr[middle]) return search(arr,target,start,middle-1)
    else return search(arr,target,middle+1,end)
}

console.log(recBinarySearch([-5,2,4,6,10],10))
console.log(recBinarySearch([],10))
console.log(recBinarySearch([-5,2,4,6,10],6))
console.log(recBinarySearch([-5,2,4,6,10],20))

// Big-O = O(logn);
