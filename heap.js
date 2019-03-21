function max_heapify(Arr,i){
    let left = 2*i;
    let right = 2*i + 1;
    let largest
    console.log(Arr,i)
    if(left < Arr.length && Arr[left] > Arr[i]){
        largest = left;
    }else{
        largest = i;
    }

    if(right < Arr.length && Arr[right] > Arr[largest]){
        largest = right
    }

    if(largest != i){
        swap(Arr,largest,i)
        max_heapify(Arr,largest)
    }
}

function swap(Arr,idx1,idx2){

    let temp 
    temp = Arr[idx1]
    Arr[idx1] = Arr[idx2]
    Arr[idx2] = temp

    return Arr
}

function build_heap(Arr){
    let arrLen = Arr.length - 1
    for(let i = Math.floor((arrLen/2));i >= 1;i--){
        max_heapify(Arr,i)
    }
    return Arr
}

let testArr = [null,1,4,3,7,8,9,10]

function heap_sort(arr){
    let startTime = new Date().getTime()
    let sorted = []
    let heap = build_heap(arr)
    for(let i = heap.length - 1;i >= 1;i--){
        sorted.push(heap[1])
        heap = swap(heap,1,i)
        heap.pop()
        max_heapify(heap,1)
    }
    console.log(Date.now() - startTime)
    console.log(sorted)
}

heap_sort(testArr)