// function uniqueChar(str){
// let arr=str.split('')
// let result=""
// let arr1=""
// for(let i=0; i<arr.length; i++){
//     if(result.indexOf(arr[i].toLowerCase())==-1){
//         result+=arr[i]
//     }
// }
// return result.length==arr.length
// }
// console.log(uniqueChar("abcdeAa"));
// console.log(uniqueChar("bridgeon"));
// console.log(uniqueChar("1212"));


// function countVowel(str){
//     let vowels="aeiou"
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if(vowels.indexOf(str[i])!=-1){
//             count+=1
//         }
//     }
//     return count

// }
// console.log(countVowel("bridgeON"));
// console.log(countVowel("AEIOU"));
// console.log(countVowel("JavaScript"));


// function toArray(num){
//     let arr=num.toString().split('').map(Number)
//     console.log(arr);
    
// }
// console.log(toArray(235));


// function toNumber(arr){
//  let num=arr.join('')
//  console.log(Number(num));
 
 
// }
// console.log(toNumber([2, 3, 5]));


function nearestChapter(obj,num){
    let diff=0
    for(let x in obj){
        diff=obj[x]-num   
    }
    return diff
 
}
console.log(nearestChapter({chapter1 : 1, chapter2 : 15, chapter3 : 20}, 10));
// console.log(nearestChapter({HTML : 7, CSS : 10, JavaScript : 15}, 12));
// console.log(nearestChapter({A : 1, B : 5}, 3));






