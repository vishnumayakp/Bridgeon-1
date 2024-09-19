function getAverage(obj){ 
    let value=[]
    let result=0
   for(let x in obj){
    value= obj.marks
   }
   for(let i=0; i<value.length; i++){
    result+=value[i]/value.length
   }
   return result
   
}
console.log(getAverage({name: "John", marks: [25, 45, 10, 30] }));
//console.log(getAverage({name: "Kevin", marks: [50, 45, 40, 40, 25] }));

