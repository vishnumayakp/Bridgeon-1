function onlyNumber(arr){
    let result=[]
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i]=='string'){
            result.push(arr[i])
        }
    }
    return result
}
console.log(onlyNumber([1,"bridgeon",true,"solutions"]));
 console.log(onlyNumber(["10",false,6,"Ten"]));
