function consicutive(arr){
    let out=[];
    for(let i=1; i<=arr.length-1; i++){
        if(arr[i]!=arr[i-1]+1){
            out.push(arr[i])
        }
    }
    return out
}
console.log(consicutive([1,2,3,4,6,7,8]));

console.log(consicutive([10,11,12,20,21,22,30]));
