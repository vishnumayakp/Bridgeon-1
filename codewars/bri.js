//   


// function oddEven(str){
//     if(str.length%2==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(oddEven("apples"));
// console.log(oddEven("cherry"));
// console.log(oddEven("pears"));



// function capitalize(str){
//     let string=str.split(' ')
//     let result=[];
//     for(let i=0; i<string.length; i++){
//         result.push(string[i][0].toUpperCase()+string[i].slice(1).toLowerCase())
//     }
//     return result.join(' ')
    
// }
// console.log(capitalize("bridgeon solutions"));
// console.log(capitalize("How Are You?"));
// console.log(capitalize("HELLO WORLD"));



// let i,j;
// let row=5;
// let str="";
// for(let i=1; i<=row; i++){
//     for(let j=1; j<=i; j++){
//         str+=i+1-j
//     }
//     str+="\n"
// }
// console.log(str);


// function getSum(arr){
//     let sum=0;
//  for(let i=0; i<arr.length; i++){
//     sum+=Math.abs(arr[i])
    
//  }
//  return sum
// }
// console.log(getSum([2, -1, 4, 8, 10]));
// console.log(getSum([-3, -4, -10, -2, -3]));
// console.log(getSum([2, 4, 6, 8, 10]));



// function unique(str){
//     let value="";
//     for(let i=0; i<str.length; i++){
//         if(value.indexOf(str[i])==-1){
//             value+=str[i]
//         }
//     }
//     return value.length==str.length
// }
// console.log(unique("abcdef"));
// console.log(unique("program"));
// console.log(unique("Bridgeon"));


// let i,j;
// let row=5;
// let arr=["A","R","R","A","Y"]
// let str="";
// for(let i=1; i<=row; i++){
//     for(let j=1; j<=i; j++){
//         str+=i+1-j
//     }
//     str+="\n"
// }
// console.log(str);


// let i,j;
// let row=5;
// let str="";
// for(let i=0; i<=row; i++){
//     for(let j=1; j<=row-i; j++){
//         str+=row+1-j-i
//     }
//     str+="\n"
// }
// console.log(str);


// function comp(str1,str2){
//     return str1.length==str2.length
// }
// console.log(comp("AB", "CD"));
// console.log(comp("ABC", "DE"));
// console.log(comp("hello", "bridgeon"));


// function cameCasing(str){
//     let string=str.toLowerCase().split(' ')
//     let result="";
//     value=string[0];
//   for(let i=1; i<string.length; i++){
//     result=string[i]
//     value+=result.charAt(0).toUpperCase()+result.slice(1)
//     }
//     return value;
// }
// console.log(cameCasing("bridgeon solutions"));

// function reverseString(str){
//     let arr=str.split(/\s+/).reverse()
//     return arr.join(' ').trim()
    
// }
// console.log(reverseString("Welcome to Bridgeon"));
// console.log(reverseString(" hello world "));
// console.log(reverseString("a good   example"));



// const winnerList1 = [

//     { season: '1999-00', team: 'Real Madrid', country: 'Spain' },
    
//     { season: '2000-01', team: 'Bayern Munich', country: 'Germany' },
    
//     { season: '2001-02', team: 'Real Madrid', country: 'Spain' },
    
//     { season: '2002-03', team: 'Milan', country: 'Italy' },
    
//     { season: '2003-04', team: 'Porto', country: 'Portugal' }
    
//     ];

    
//     function countWins(obj,countrys){
//         let result={}
//         for(let x of obj){
//             result[x.country]=(result[x.country] || 0)+1
//         }
//         if(result[countrys]==undefined){
//             return 0
//         }else{
//             return result[countrys]
//         }
        
//     }
//     console.log(countWins(winnerList1, 'Spain') );
//     console.log(countWins(winnerList1, 'Portugal') );
//     console.log(countWins(winnerList1, 'Sportland'));


// function consicutive(arr){
//  let result=[];
//  for(let i=0; i<arr.length-1; i++){
//     if(arr[i+1]-arr[i]!=1){
//        result.push(arr[i+1])
//     }
//  }
//  return result
// }
// console.log(consicutive([1,2,3,4,6,7,8]));
// console.log(consicutive([10,11,12,20,21,22,30]));


// function Scrambled(str){
//  let arr1=[];
//  let arr2=[];
//  let arr=str.split('')
//  for(let i=0; i<arr.length; i++){
//     if(arr[i]==arr[i].toUpperCase()){
//         arr1.push(arr[i])
//     }else{
//         arr2.push(arr[i])
//     }
    
//  }
//  return [[arr2.join('')],[arr1.join('')]]
// }
// console.log(Scrambled("bridGEON"));
// console.log(Scrambled("MICROsoft"));
// console.log(Scrambled("FacEBoOK"));


// function onlyNumber(arr){
//     let result=[];
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]=="string"){
//         result.push(arr[i])
//     }
// }
// return result
// }
// console.log(onlyNumber([1,"bridgeon",true,"solutions"]));
// console.log(onlyNumber(["10",false,6,"Ten"]));



    
    
    












