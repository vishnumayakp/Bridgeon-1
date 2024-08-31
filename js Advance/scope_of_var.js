// var globalVar = "I'm global";  // Globally scoped variable

// function showGlobal() {
//   console.log(globalVar);  // Accessible inside the function  "This will equal answers for let and const also"
// }

// showGlobal();  // Output: I'm global
// console.log(globalVar);  // Accessible outside the function as well

function showGlobal(){
  let globalVar="I m function"
   console.log(globalVar); 
}                             // This is not defined error can't access out of the function for let,const,var
showGlobal();
// console.log(globalVar);

