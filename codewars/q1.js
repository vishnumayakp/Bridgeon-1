// function solution(str){
//     let pair=""
//     let arr=[];
//     let arr1=str;
//     let len=str.length;
//     if(len%2!=0){
//         arr1+="_"
//     }
//     for(let i=0; i<=arr1.length-1; i+=2){
//          pair=arr1.slice(i,i+2);
//          arr.push(pair)
//     }   
   
//     return arr
// }
// console.log(solution("abc"));
// console.log(solution('abcdef'));


// function solution(num){
//     let obj=[
//         {value:1000, symbol:"M"},
//         {value:900, symbol:"CM"},
//         { value:500, symbol:"D"},
//         {value:400, symbol:"CD"},
//         {value:100, symbol:"C"},
//         {value:90, symbol:"XC"},
//         {value:50, symbol:"L"},
//         {value:10, symbol:"X"},
//         {value:9, symbol:"IX"},
//         {value:5, symbol:"V"},
//         {value:4, symbol:"IV"},
//         {value:1, symbol:"I"}   
//     ];
//     let result=""

//     for(let {value,symbol} of obj){
//         while(num>=value){
//             result+=symbol;
//             num-=value;
//     }
    
// }
// return result
// }
// console.log(solution(2040));
// console.log(solution(2008));
// console.log(solution(3999));


// function intToRoman(num) {
//     const romanNumerals = [
//       { value: 1000, symbol: 'M' },
//       { value: 900, symbol: 'CM' },
//       { value: 500, symbol: 'D' },
//       { value: 400, symbol: 'CD' },
//       { value: 100, symbol: 'C' },
//       { value: 90, symbol: 'XC' },
//       { value: 50, symbol: 'L' },
//       { value: 40, symbol: 'XL' },
//       { value: 10, symbol: 'X' },
//       { value: 9, symbol: 'IX' },
//       { value: 5, symbol: 'V' },
//       { value: 4, symbol: 'IV' },
//       { value: 1, symbol: 'I' }
//     ];
  
//     let result = '';
  
//     for (const { value, symbol } of romanNumerals) {
//       while (num >= value) {
//         result += symbol;
//         num -= value;
//       }
//     }
  
//     return result;
//   }
  
//   // Examples:
//   console.log(intToRoman(1990)); // 'MCMXC'
//   console.log(intToRoman(2008)); // 'MMVIII'
//   console.log(intToRoman(3999)); // 'MMMCMXCIX'


// function intToRoman(num) {
//     const romanNumerals = [
//       { value: 1000, symbol: 'M' },
//       { value: 900, symbol: 'CM' },
//       { value: 500, symbol: 'D' },
//       { value: 400, symbol: 'CD' },
//       { value: 100, symbol: 'C' },
//       { value: 90, symbol: 'XC' },
//       { value: 50, symbol: 'L' },
//       { value: 40, symbol: 'XL' },
//       { value: 10, symbol: 'X' },
//       { value: 9, symbol: 'IX' },
//       { value: 5, symbol: 'V' },
//       { value: 4, symbol: 'IV' },
//       { value: 1, symbol: 'I' }
//     ];
  
//     let result = '';
  
//     for (const { value, symbol } of romanNumerals) {
//       while (num >= value) {
//         result += symbol;
//         num -= value;
//       }
//     }
  
//     return result;
//   }
  
//   // Example:
//   console.log(intToRoman(2040)); // 'MMXL'
  
  

function solution(str){
let result=str.split(/(?=[A-Z])/);
return result.join(' ')

}
console.log(solution("camel Casing"));
console.log(solution("camelCasingTest"));


// function findMissing(arr){
//     let smallAlpha="abcdefghijklmnopqrstuvwxyz"
//     let capAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     if(arr[0]==arr[0].toUpperCase()){
//         let capital=capAlpha.slice(capAlpha.indexOf(arr[0]),capAlpha.indexOf(arr.length+1))
//         for(let i=0; i<capAlpha.length; i++){
//             if(arr.indexOf(capital[i])==-1){
//                 return capital[i]
//             }
//         }
//     }else{
//         let small=smallAlpha.slice(smallAlpha.indexOf(arr[0]),smallAlpha.indexOf(arr.length+1))
//         for(let i=0; i<smallAlpha.length; i++){
//             if(arr.indexOf(small[i])==-1){
//                 return small[i]
//             }
//     }
// }
// }
// console.log(findMissing(['O','Q','R','S'] ));
// console.log(findMissing(['a','b','d','e'] ));


// function wave(str){
//     let arr=[];
//     for(let i=0; i<=str.length-1; i++){
//         if(str[i]!=" "){
//             arr.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1))
//         }
        
//     }
//     return arr
// }
// console.log(wave("hello"));
// console.log(wave("codewars"));
// console.log(wave('rpoeyrf  fmhwcpd k'));


// function spinWords(str){
//     let value=[];
//  let result=str.split(' ')
//  for(let i=0; i<=result.length-1; i++){
//     if(result[i].length>=5){
//         value.push(result[i].split('').reverse().join(''))
//     } else{
//         value.push(result[i])
//     }
//  }
//  return value.join(' ')
 
// }

// console.log(spinWords("Hey fellow warriors"));


// function primefactors(num){
//  let str=""; 
//  for(let i=0; i<=n; i++){

//  }
// }
// console.log(primefactors(86240));
function diamond(row){
 let str="";
 if(row%2!=0 && row<=0){
    for(let i=1; i<=row; i++){
        for(j=1; j<=row-i; j++){
            str+=" "
        }
        for(k=1; k<=2*i-1; k++){
            str+="*"
        }
        str+="\n"
     }
    
    
     for(let i=row-1; i>=1; i--){
        for(j=1; j<=row-i; j++){
            str+=" "
        }
        for(k=1; k<=2*i-1; k++){
            str+="*"
        }
        str+="\n"
    }   
 }
}
console.log(diamond(3));





