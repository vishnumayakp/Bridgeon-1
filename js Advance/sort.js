function sortArr(arr){
    let result=arr
    let values=[]
    result.sort((a,b)=>{
        return a-b
    })
    for(let i=0; i<arr.length; i++){
        if(values.indexOf(arr[i])==-1){
            values.push(arr[i])
        }
    }
    return result==values
    
}
console.log(sortArr([2,6,5,4,7,8]))