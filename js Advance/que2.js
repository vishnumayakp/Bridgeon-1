function findSqrt(num){
    let result=Math.sqrt(num)
  return  Math.floor(result)
    
}
console.log(findSqrt(3));


function mySqrt(num) {
    if (num === 0 || num === 1) return x;
    let result = 0;
    for (let i = 1; i * i <= num; i++) {
        result = i;
    }
    return result;
}
console.log(mySqrt(4));
