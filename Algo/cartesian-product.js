function cartesianProduct(arr1,arr2){
    let arr4=[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            arr4.push([arr1[i],arr2[j]]);
        }
    }
    return arr4;
}

console.log(cartesianProduct([1,2],[3,4,5]))

// Big-O = O(mn);