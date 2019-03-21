function merge(arr1,arr2,A){
    let i = 0,j = 0,k = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            A[k] = arr1[i];
            i++;
        }else if(arr2[j] < arr1[i]){
            A[k] = arr2[j]
            j++;
        }else{
            A[k] = arr1[i]
            i++;
        }
        k++;
    }
    
    while(j < arr2.length){
        A[k] = arr2[j]
        j++;
        k++;
    }   
    while(i < arr1.length){
        A[k] = arr1[i]
        i++;
        k++;
    }
    return A;
}

function mergeSort(A){
    let n = A.length
    if(n < 2){
        return 
    }
    let mid = n/2;
    let left = []
    let right = []
    
    for(let i = 0;i < mid;i++){
        left[i] = A[i]
    }
    for(let j = mid;j < n;j++){
        right[j-mid] = A[j]
    }
    console.log(left,right)
    mergeSort(left);
    mergeSort(right);
    merge(left,right,A);
    return A
}
let a = []
console.log(a.length)
let arr = [9,8,4,5,7,2,1,0]
let startTime = new Date().getTime()
let sorted = mergeSort(arr)
console.log(Date.now() - startTime)
console.log(sorted)