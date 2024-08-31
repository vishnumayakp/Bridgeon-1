// var expect = function(val) {
//  var toBe = function(num){
//         if(expect(val)===toBe(num)){
//             return true
//         }else{
//             return "equal"
//         }
//     }
//     console.log(toBe(5));
// };
// console.log(expect(5));


// function flattenArray(arr){
// return arr.flat(Infinity)

// }
// console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
// console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
// console.log(flattenArray([1, [2, [3, [4, 5]]]]));




function longestPalindrome(s) {
    let maxPalindrome = '';

    for (let i = 0; i < s.length; i++) {
        // Check odd-length palindromes
        let oddPalindrome = expandAroundCenter(s, i, i);
        if (oddPalindrome.length > maxPalindrome.length) {
            maxPalindrome = oddPalindrome;
        }

        // Check even-length palindromes
        let evenPalindrome = expandAroundCenter(s, i, i + 1);
        if (evenPalindrome.length > maxPalindrome.length) {
            maxPalindrome = evenPalindrome;
        }
    }

    return maxPalindrome;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}

// Test cases
console.log(longestPalindrome("babad"));  // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));   // Output: "bb"
console.log(longestPalindrome("a"));      // Output: "a"
console.log(longestPalindrome("ac"));     // Output: "a" or "c"
console.log(longestPalindrome("racecar")); // Output: "racecar"





