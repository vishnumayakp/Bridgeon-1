// function uniqueVal(arr){
//     let result=""
//     for(let i=0; i<arr.length; i++){
//         if(result.indexOf(arr[i])==-1){
//             result+=arr[i]
//         }
//     }
//     return result.length==arr.length
// }
// console.log(uniqueVal(["A", "B", "C", "D"]));
// console.log(uniqueVal([1, 2, 3, 4, 1]));
// console.log(uniqueVal(["h", "e", "l", "l", "o"]));


// function dup(str){
//     let result=""
//     for(let i=0; i<str.length; i++){
//         if(result.indexOf(str[i])==-1){
//             result+=str[i]
//         }
//     }
//     return result
// }
// console.log(dup("Bridgeon"));
// console.log(dup("hello"));
// console.log(dup("aabbcc"));


// function middle(str){
//    let middle=Math.floor(str.length/2)
  
//    if(str.length%2===0){

//     return str[middle-1]+str[middle]
//    }else{
//     return str[middle]
//    }
   
// }
// console.log(middle("ABC"));
// console.log(middle("Bridgeon"));
// console.log(middle("middle"));



// function wordFind(str){
//     let string=str.split(' ');
//     let result=""
//     for(let i=0; i<string.length; i++){
//         if(string[i]==="Bridgeon"){
//             return `I found Bridgeon at ${i + 1}`
//         }
//     }
    

// }
// console.log(wordFind("Bridgeon is good"));
// console.log(wordFind("I am finding Bridgeon"));
// console.log(wordFind("We are Bridgeon"));


// function doubleChar(str){
//     let result=""
//     for(let i=0; i<str.length; i++){
//         result+= str[i]+str[i]
//     }
//     return result
// }
// console.log(doubleChar("String"));
// console.log(doubleChar("Hello World!"));
// console.log(doubleChar("1234!_ "));


// function reverseString(str){
//     let result=str.split('').reverse()
//     return result.join('')
    
// }
// console.log(reverseString("!trams era uoY"));



// function findWord(arr){
//     let flag=true;
//     let result=[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]=="bridgeon"){
//             if(flag==true){
//                 flag=false
//             }else{
//                 flag=true
//             }  
//         }
//         result.push(flag)
//     }
//     return result
// }
// console.log(findWord(["bridge", "bridgeon", "on"]));
// console.log(findWord(["bridgeon", 10101, 3.14, 53, "bridgeon"]));
//  console.log(findWord([false, false, "bridgeon", true]));


// function arrayOfMultiples(num,length){
//     let result=[];
//     for(let i=1; i<=length; i++){
//         result.push(i*num)
//     }
//     return result
// }
// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));


// function findLargest(arr){
//     let result=[];
//     for(let i=0; i<arr.length; i++){
//         result.push(Math.max(...arr[i]))    
//     }
//     return result
// }
// console.log(findLargest([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
// console.log(findLargest([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));
// console.log(findLargest([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]));


// function ageMembers(arr){
//     let result=[]
//     for(let x of arr){
//         result.push(x.age)
//     }
//     let min=Math.min(...result)   
//     let max=Math.max(...result)
//     let diff=max-min;
//     return [min,max,diff]
// }
// console.log(ageMembers([{name: "John", age: 15 },{ name: "Steve", age: 50 }]));
// console.log(ageMembers([{ name: "Mark", age: 38 },{ name: "Charlie", age: 10 },{ name: "Anna", age: 25 }]));
// console.log(ageMembers([{ name: "Rachel", age: 20 },{ name: "Jennifer", age: 45 },{ name: "Jack", age: 43 },{ name: "Maria", age: 3 }]));


// function totalPrice(arr){
//     let total=0;
//     for(let x of arr){
//         total+=x.quantity*x.price
//     }
//     return total
// }
// console.log(totalPrice([{ product: "Milk", quantity: 1, price: 10 }]));
// console.log(totalPrice([{ product: "Milk", quantity: 3, price: 10 },{ product: "Biscuit", quantity: 1, price: 20 }]));
// console.log(totalPrice([{ product: "Milk", quantity: 1, price: 10 },{ product: "Eggs", quantity: 12, price: 5 },{ product: "Bread", quantity: 2, price: 20 },{ product: "Cheese", quantity: 1, price: 30 }]));


// function getSalary(arr){
//          let total=0;
//          for(let x of arr){
//             total+=x.salary
//          }
//          return total
//     }
//     console.log(getSalary([{ name: "John", salary: 23000 },{ name: "Steve", salary: 40000 },{ name: "Martin", salary: 15000 }]));
//     console.log(getSalary([{ name: "Bella", salary: 29000 },{ name: "Smith", salary: 32000 }]));
        
    
// function getSum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%3==0){
//             sum+=arr[i]
//         }
//     }
//     return sum
// }
// console.log(getSum([1, 3, 8, 5, 9]));
// console.log(getSum([1, 2, 3, 4, 5]));
// console.log(getSum([27, 15, 7, 1, 4]));



// function spinWords(str){
//     let result="";
//     let arr=str.split(' ')
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length>=5){
//            arr[i]=arr[i].split('').reverse().join('')
//         }
//     }
//     return arr.join(' ')
// }
// console.log(spinWords( "Hey fellow warriors" ));
// console.log(spinWords( "This is a test"));
// console.log(spinWords( "This is another test" ));


// function sumMultiples(n){
//     let sum=0;
//     for(let i=1; i<=n; i++){
//         if(i%3==0 || i%7==0 || i%5==0){
//             sum+=i
//         }
//     }
//     return sum
// }
// console.log(sumMultiples(7));
// console.log(sumMultiples(9));
// console.log(sumMultiples(10));


// function operations(str){
// let sum=0;
// for(let i=0; i<=str.length-1; i++){
//     if(str[i]=="i"){
//         sum+=1;
//     }else if(str[i]=="d"){
//         sum-=1
//     }else{
//         sum=sum*sum
//     }
   
    
// }
// return sum
// }
// console.log(operations("iiisd"));
// console.log(operations("dsdi"));
// console.log(operations("iiss"));


// function getAverage(obj){
//   let arr=obj.marks
//   let result=arr.reduce((total,value)=>{
//     return total+value
//   },0)
//   return result/arr.length
// }
// console.log(getAverage({name: "John", marks: [25, 45, 10, 30] }));
// console.log(getAverage({name: "Kevin", marks: [50, 45, 40, 40, 25] }));


// function oddEven(arr){
//     let sum=0
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     if(sum%2==0){
//         return "even"
//     }else if(sum%2!=0){
//         return "odd"
//     }
// }
// console.log(oddEven([0, 1, 4]));
// console.log(oddEven([0, -1, -5]));
// console.log(oddEven([0]));

function longWord(str){
    let arr=str.split(' ')
    let string=str[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i].length>string.length){
            string=arr[i]
        }
     } 
     return string 
}
console.log(longWord("Web Development Tutorial"));
console.log(longWord("We are Bridgeon"));







