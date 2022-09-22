function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numToIns = arr[i];
        let j=i-1;
        for(; j>=0 && arr[j]>numToIns ; j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=numToIns;
    }
}

arr = [8,20,-2,4,-6];
insertionSort(arr);
console.log(arr);

// Big-O = O(n^2);
