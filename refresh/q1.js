// function even(arr){
// let num = "";
// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i]%2==0){
//         num += " " + arr[i]
//     }
// }
// return num;
// }
// console.log(even([2, 7, 4, 3, 5, 8]))


// let i,j,k;
// let row=5;
// let str="";
// for(i=1; i<=row; i++){
//     for(j=1; j<=row-i; j++){
//         str+=" ";
//     }
//     for(k=1; k<=2*i-1; k++){
//         str+=k
//     }
//     str+="\n"
// }
// console.log(str);


//  let i,j,k;
//  let row=5;
//  let str="";
//  for(i=1; i<=row; i++){
//     for(j=1; j<=i; j++){
//        if(i==1 || j==i ||  j==1|| i==row){
//          str+="*" 
//        }else{
//         str+=" "
//        }
//     }
//     str+="\n"
//  }
//  console.log(str);



// function camelCase(str){ 
//     let value=[];
//     let string=str.split(' ')
//     for(let i=0; i<string.length; i++){
//       if(string[i]!=string[0]){
//         value.push(string[i][0].toUpperCase()+string[i].slice(1))
//       }else{
//         value.push(string[0])
//       }    
//     }
//     return value.join('')   
// }
// console.log(camelCase("my name is khan"));




//   let i,j,k;
//   let row=5;
//   let str="";
//   for(i=row; i>=1; i--){
//     for(j=1; j<=row-i; j++){
//         str+=" "
//     }
//     for(k=1; k<=2*i-1; k++){
//         str+=k
//     }
//     str+="\n"
//   }
//   console.log(str);


// let i,j,k;
// let row=4;
// let str="";
// let count=1;
// for(i=1; i<=row; i++){
//     for(j=1; j<=i; j++){
//         str+=" "+count
//         count++
//     }
//     str+="\n"
// }
// console.log(str);


// function reverse(str){
//  let string=str.split('').reverse().join('')
//  console.log(string);
 
// }
// console.log(reverse("!trams era uoY"));


// function largest(arr){
//     let value="";
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>arr[i+1]){
//             value+=arr[i]
//         }
        
//     }
//     return value
// }
// console.log(largest([1, 4, 7, 3, 6]));


  

// function sum(arr){
//  let result=0;
//  for(let i=0; i<arr.length; i++){
//     if(arr[i]%5==0){
//         result+=arr[i]
//     }
//  }
//  return result
// }
// console.log(sum([1, 5, 9, 15, 30, 50]));


// function squareValue(arr){
//  let sum=[];
//  for(let i=0; i<arr.length; i++){
//    sum.push(arr[i]*arr[i])
//  }
//  return sum.join(',')
// }
// console.log(squareValue([1, 2, 3, 4, 5]));


function squareValue(arr){
let result=arr.filter((value)=>{
    return value>3
})
return result
}
console.log(squareValue([1, 2, 3, 4, 5]));


