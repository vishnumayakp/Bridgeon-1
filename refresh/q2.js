// function sumofPos(arr){
//     let sum=0;
//     for(let i=0; i<=arr.length-1; i++){
//         if(arr[i]>=0){
//             sum+=arr[i]
//         }
//     }
//     return sum
// }
// console.log(sumofPos([1, -4, 9, 0, 30, -50]));


// function upperCase(str){
//     let result="";
// for(let i=0; i<=str.length-1; i++){
//     if(i%2==0){
//       result+=str[i].toUpperCase()  
//     }else{
//         result+=str[i].toLowerCase()
//     }
// }
// return result
// }
// console.log(upperCase("world"));


// function hours(hr){
//     let result=hr*60*60;
//     return result

// }
// console.log(hours(24));


// function palindrome(arr){
//  let result=[];
//  let value=[]
//  for(let i=0; i<arr.length; i++){
//      if(arr[i].split('').reverse().join('')==arr[i]){
//         result.push(arr[i])
//      }      
//  }
 
//  return result
// }
// console.log(palindrome(["malayalam", "deed", "hello", "peep", "jump"]));


// function findNumber(arr){
//  let arr1=[];
//  for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] =="number"){
//         arr1.push(arr[i])
//     }
//  }
//  return arr1
// }
// console.log(findNumber([1, "a", "b", 0, 15]));


// const arr=[{name:"abhay",age:21},{name:"hrj",age:15},{name:"vishnu",age:10}]
// function array(arr){
//     let result="";
//    for(let x of arr){
//     if(x.age>=15){
//         result+=x.name+" "+x.age+"\n"
//     }
    
//    }
//    return result
// }
// console.log(array(arr));

// const arr=[{name:"abhay",age:21},{name:"hrj",age:15},{name:"vishnu",age:10}]

// function objectName(arr){
//     let result=[];
//     for(let x of arr){
//         result.push(x.name)
//     }
//     return result.sort((a,b)=>{
//         return a.length-b.length
//     })
    
// }
// console.log(objectName(arr));


// function input(arr){
//     let result=[];
//     let array=0;
//  for(let x of arr){
//     result.push(x.age) 
//  }
//  return array=Math.max(...result)-Math.min(...result)

// }
// console.log(input([{name: "John",age: 13,},{name: "Rachel",age: 45,},{name: "Jennifer",age: 65,}]));



// function sortArray(arr){
 
//  return arr.sort((a,b)=>{
//     return a.length-b.length
//  })
 
// }
// console.log(sortArray(["a", "ccc", "dddd", "bb"]));


// function getSum(arr){
//  return arr.reduce((total,value)=>{
//     return total+Math.abs(value)
//  },0)
// }
// console.log(getSum([2, 4, 6, 8, 10]));


// function fourLetter(arr){
//     return arr.filter((value)=>{
//         return value.length==4
//     })
// }
// console.log(fourLetter(["Tomato", "Potato", "Pair"]));
// console.log(fourLetter(["Kangaroo", "Bear", "Fox"]));
// console.log(fourLetter(["Ryan", "Kieran", "Jason", "Matt"]));



// function reverseString(str){
//     let result=str.split(' ')
//     let value=result.map((value)=>{
//         if(value.length>=5){
//           return value.split('').reverse().join('') 
//         }else{
//             return value
//         }
//     })
//     return value
// }
// console.log(reverseString("This is another test"));


// function highLow(str){
//     let value="";
//     let result=str.split(' ')
//    value+=Math.max(...result)+" "
//    value+=Math.min(...result)
//    return value
// }
// console.log(highLow("13"));



// function toArray(num){
//  let result=num.toString().split('').map((value)=>{
//     return Number(value)
//  })
//  return result
// }
// console.log(toArray(235));

// function toNumber(arr){
//     return arr.join('')
//    }
//    console.log(toNumber([2,3,5]));




// function intoString(obj){
//     let result=[];
//     return Object.values(obj).join(' ')
   
// }
// console.log(intoString({ 1: "I", 2: "am", 3: "innocent" }));


// function calculator(n1,symbol,n2){
//     let result=0;
//     if(symbol=="+"){
//         result+=n1+n1;
//     }else if(symbol=="*"){
//         result+=n1*n2
//     }else if(symbol=="/"){
//         result+=n1/n2
//     }
//     return result
// }
// console.log(calculator(4, "/", 2));









