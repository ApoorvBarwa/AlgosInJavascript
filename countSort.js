function countSort(A){
    var maxInd = getMax(A);
    var auxArr = []
    var arrToRet = []
    for(let i=0;i<maxInd;i++){
        auxArr[i] = 0
    }

    for(let j=0;j<A.length;j++){
        auxArr[A[j]]++
    }

    for(let k=0;k<maxInd;k++){
        let tmp = auxArr[k]
        while(tmp > 0){
            arrToRet.push(k)
            tmp--;
        }
    }

    console.log(arrToRet)
}

function getMax(A){
    var max
    var temp 
    for(let i=0;i<A.length;i++){
        if(i == 0){
            max = A[i]
        }      
        temp = A[i]
        if(temp > max){
            max = temp
        }
    }
    return max
}

let arr = [5,4,3,4,9,5,6,7]

countSort(arr)