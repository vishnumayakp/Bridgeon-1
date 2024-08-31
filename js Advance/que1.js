function singleNumber(arr){
   let result=[];
   let res=[null]
   let value=[];
   for(i=0; i<arr.length; i++){
    if(result.indexOf(arr[i])==-1){
        result.push(arr[i])  
    }else{
        value.push(arr[i])
    }
   }
   for(let i=0; i<arr.length; i++){
    if(value.indexOf(arr[i])==-1){
       res.push(arr[i]) 
    }
   } 
   if(res==0){
    return null
   }
   return Math.max(...res)
}
console.log(singleNumber([1,2,3,2,3,4,5,6,6,7,8]));
console.log(singleNumber([1,1,2,2]));

