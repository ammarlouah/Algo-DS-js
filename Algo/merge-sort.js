function mergeSort(arr){
    if(arr.length<2) return arr;
    const mid=Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    const sorted = [];
    while(left.length && right.length){
        if(left[0]<=right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    }
    return [...sorted,...left,...right];
}

let arr = [8,20,-2,0,4,-6];
console.log(mergeSort(arr));

// Big-O = O(nlogn);