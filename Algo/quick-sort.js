function quickSort(arr){
    if(arr.length<2) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==pivot) continue;
        if(arr[i]<pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left),pivot,...quickSort(right)];
}

let arr = [8,20,-2,0,4,-6];
console.log(quickSort(arr));

// Worst case - O(n^2) if the array is already sorted
// Average case - O(nlogn)