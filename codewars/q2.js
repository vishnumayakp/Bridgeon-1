// function findMissingLetter(arr){

//     let value="abcdefghijklmnopqrstuvwxyz"
//     let value1="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     if(arr[0]==arr[0].toUpperCase()){
//         let cap=value1.substr(value1.indexOf(arr[0]),arr.length+1)
//         for(let i=0;i<=cap.length;i++){
//             if(arr.indexOf(cap[i])===-1)
//                 return cap[i]
//         }
//     }else{
//         let small=value.substr(value.indexOf(arr[0]),arr.length+1)
//         for(let i=0;i<=small.length;i++){
//             if(arr.indexOf(small[i])===-1)
//                 return small[i]
//         }
//     }
// }
// console.log(findMissingLetter(['O','Q','R','S'] ));
// console.log(findMissingLetter(['a','b','d','e'] ));


// function longestWord(arr,k){
//     let result=[];
//     let joined="";
//     for(let i=0; i<arr.length; i++){
//         joined=arr[i].concat("",arr[i+1]).split(',')
//         console.log(joined);
        
//         for(let i=0; i<joined.length; i++){ 
//           result=Math.max(joined[i].length)  
           
              
//         }
//     }
//     return result
   
//     // console.log(result);
// }
// console.log(longestWord(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2));



// function freeShipping(obj){
//     let sum=0;
//     let value=Object.values(obj)
//     for(let x of value){
//         sum+=x  
//     } 
//     if(sum>50.00){
//         return true
//     }else{
//         return false
//     }  
// }
// console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
// console.log(freeShipping({ "Flatscreen TV": 399.99 }));
// console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));



// function isPositiveDominant(arr){
//     let sum=0;
//     let sum1=0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<0){
//              sum+=arr[i]
//         }else{
//             sum1+=arr[i]
//         }    
//     }
//     return sum1
    
// }
// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
// console.log(isPositiveDominant([5, 99, 832, -3, -4]));



// function permutations(){

// }
// console.log(permutations('a'));



// function emp(){  
//     let id=10,name=20,salary=30;
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  
//     }  
//     // e=new emp(103,"Vimal Jaiswal",30000);  
      
//     // document.write(e.id+" "+e.name+" "+e.salary); 

//     console.log(id);
    



// function isPositiveDominant(arr){
//  let positive=[];
//  let negative=[];
//  for(let x of arr){
//     if(x>0 && positive.indexOf(x)==-1){
//         positive.push(x)
//     }else if(x<0 && negative.indexOf(x)==-1){
//         negative.push(x)
//     }
//  }
//  return positive.length>negative.length
// }
// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
// console.log(isPositiveDominant([5, 99, 832, -3, -4]));

// console.log(isPositiveDominant([5, 0]));
// console.log(isPositiveDominant([0, -4, -1]));



function capitalize(str){
    let value=[]
 let result=str.split(' ')
 for(let i=0; i<result.length; i++){
    if(result[i].length>2){
        value[i]=result[i][0].toUpperCase()+result[i].slice(1).toLowerCase()   
    }else{
        value[i]=result[i]
    }
 }
 return value.join(' ').trim()
}
console.log(capitalize("apple"));
console.log(capitalize("apple of banana"));
console.log(capitalize("one space"));
console.log(capitalize(" space WALK "));




