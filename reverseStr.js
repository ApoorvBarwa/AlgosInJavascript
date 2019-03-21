console.log(process.argv[2])
reverse(process.argv[2])
function reverse(input){
    let revStr = ''
    let anStr = 'qwerty'
    anStr[0]='a'
    let input1 = []
    let temp,j=0,k=input.length - 1
    for(let i=input.length-1;i>=0;i--){
        revStr += input.charAt(i)
        console.log(input[i])
    }
    let count = 0;
    while(j <= k){
        temp = input[k]
        input1[k]=input[j]
        input1[j]=temp
        j++;
        k--;
        count++;
    }
    console.log(count)
    console.log(revStr)

    console.log(input1.join(""))
}