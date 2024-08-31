//Non-Curried function

// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(1,20,20));


//Currying version of the same function

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(sum(10)(20)(30));


// const myObj={
//     a:1,
//     b:2,
//     c:function(){
//         console.log(this);
//                                 // in this code showing that the normally consoling myObj.c() will get
//     }                           // the obj this is refernce the obj and print it
// }
//  var obj=myObj.c
//  obj();

               // but the obj taken by another variable and call it it will refernce to the windo object (myObj.c) the context=myObj



//we want to call the function using 'obj()' and also return the obj /work this keyword

// const myObj={
//     a:1,
//     b:2,
//     c:function(){
//         console.log(this);      //for normal function and anonymous function 'this' is referse to the called function
//                                //for arrow function the written function is this for arrow funtion 
//     }                          
// }
// var obj=myObj.c;               
// obj.call(myObj)    //all function has a inner function 'call()' inside call() mainly passing the context 'myObj' like that here setting the context and passing inside call()
                // using call() will set the context while they call the function



// const myObj={
//     a:1,
//     b:2,
//     c:function(){
//         console.log(this);    //Using bind() it make a new function and it wil set the context while write the function it will setting as permenent                                        
//      }                          
//     }
//     myObj.c=myObj.c.bind(myObj)
// var obj=myObj.c;               
// obj();




// const myObj={
//     a:1,
//     b:2,
//     c:function(a,b){
//         console.log(this,a,b);         // similar to the call() but also extra parameters will passing through an array
//     }                          
// };
// var obj=myObj.c;               
// obj.apply(myObj,[1,2])