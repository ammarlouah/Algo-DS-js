function bubbleSort(arr){
    let test;
    do{
        test =false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let a = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=a;
                test=true;
            }
        }

    }while(test)
}

arr = [8,20,-2,4,-6];
bubbleSort(arr);
console.log(arr);

// Big-O = O(n^2);