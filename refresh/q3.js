// let i,j,k;
// let str="";
// let row=5;
// for(let i=1; i<=row; i++){
//     for(j=1; j<=row-i; j++){
//         str+=" "
//     }
//     for(k=1; k<=2*i-1; k++){
//        if(i==1 || k==1 || k==2*i-1){
//          str+="*"
//        }else{
//         str+=" "
//        }
//     }
//     str+="\n"
// }

// for(let i=row-1; i>=1; i--){
//     for(j=1; j<=row-i; j++){
//         str+=" "
//     }
//     for(k=1; k<=2*i-1; k++){
//         if(i==1 || k==1 || k==2*i-1){
//           str+="*"
//         }else{
//          str+=" "
//         }
//      }
//     str+="\n"
// }
// console.log(str);



// function calcAge(age){
//     return age*365
// }
// console.log(calcAge(20));


// function largestNumber(arr){
//     let array=[];
//     for(let i=0; i<=arr.length-1; i++){
//         array.push(Math.max(...arr[i]))   
//     }
//     return array
// }
// console.log(largestNumber([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
// console.log(largestNumber([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));
// console.log(largestNumber([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]));


// function sum(obj){
//  let result=0;
//  let sum=0
//  result=Object.values(obj)
// for(let x of result){
//     sum+=x
// }
// return sum
// }
// console.log(sum({first: 3, second: 2.6, third: 10 }));


// function sum(obj){
//     return obj.marks.reduce((total,value)=>total+value)
// }
// console.log(sum({name: "Kevin", marks: [50, 45, 40, 40] }));


// function countTrue(arr){
//     let sum=0;
//     for(let x of arr){
//         if(x==true){
//             sum+=1
//         }
//     }
//     return sum
// }
// console.log(countTrue([false, false, false, false]));


// function domainName(str){
//  let result=str.slice(str.indexOf("//")+2,str.indexOf("com")-1);
//    return result.slice(result.indexOf(".")+1);
    
//  }
// console.log(domainName( "http://github.com/carbonfive/raygun" ));
// console.log(domainName("http://www.zombie-bites.com" ));
// console.log(domainName("https://www.cnet.com"  ));


function freeShipping(obj){
    let sum=0;
let result=Object.values(obj)
for(let x of result){
    sum+=x
    if(sum<=50){
        return false
    }else{
        return true
    }
}
return sum
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));








