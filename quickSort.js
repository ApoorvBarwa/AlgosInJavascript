function partitionArr(A,start,end){
    let pivot = A[end-1]
    let pIndex = start
    let temp
    for(let i = start;i<end;i++){
        if(A[i] <= pivot){
            temp = A[i]
            A[i] = A[pIndex] 
            A[pIndex] = temp
            pIndex++;
        }
    }

    return pIndex
}

function quickSort(A,start,end){
    if(start < end){
        let pIndex = partitionArr(A,start,end)
        console.log("Array is " , A)
        if(pIndex < end - 1 ){
            quickSort(A,start,pIndex-1)
            quickSort(A,pIndex,end)
        }
    }
    return A;
}

let arr = [9,7,5,2,1,4,6,3]

let sortedArr = quickSort(arr,0,arr.length)

console.log(sortedArr)



