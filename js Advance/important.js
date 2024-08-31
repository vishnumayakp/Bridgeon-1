//Closure in js

// var a=10
// function ab(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     y()
// }
// ab()
 

// function ab(){
//     var a=10;
//     function y(){
//         console.log(a);   
//     }
         
//     a=100; // Here the output will be 10 because here the y function not depend on the value of a it had the reference to variable a 
//      y();
     
// }
// var z = ab();
// console.log(z);
// //....
// z();
 

// function ab(){
//     var a=10;
//     function y(){
//        let b=200;
//        function z(){
//         console.log(a,b);
//        }
//     z();   
//     }
//     return y
// }
// ab()




//Pass By Value && Pass By Reference

// function one(){
//     var a=100;
//     two(a);
//     console.log('one',a);   // here is the Answer is => two 101  , one 100
// }                           //Here we passed integer so  that is not reflected to the one(a)
// function two(a){
//     a=a+1;
//     console.log('two',a);
    
// }
// one()


// function one(){
//     var a={
//         value:100
//     };
//     two(a);
//     console.log('one',a.value);   // here is the Answer is => two 101  , one 101
// }                                //  here passed a object that affected to the one()
// function two(a){
//     a.value=a.value+1;
//     console.log('two',a.value);
    
// } 
// one()


// function one(){
//     var a=[100];
//     two(a);
//     console.log('one',a[0]);   // here is the Answer is => two 101  , one 101  Same as the object
// }
// function two(a){
//     a[0]=a[0]+1;
//     console.log('two',a[0]);
    
// }
// one()

// ***Modules Import/Export Using Functions****//

//  export function sum(a,b){
//     return a+b  
//  }

//  export function sub(a,b){
//     return a-b  
//  }

//  export function mul(a,b){
//     return a*b  
//  }

//  export function div(a,b){
//     return a/b  
//  }


//** also we can use export at one time instead of multiple times **//
  function sum(a,b){
    return a+b  
 }

  function sub(a,b){
    return a-b  
 }

  function mul(a,b){
    return a*b  
 }

  function div(a,b){
    return a/b  
 }
 export{sum,sub,mul,div}




//*** Modules import/Export Using Class***//

export default class Calc{
    sum(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b
    }
    mul(a,b){
        return a*b;
    }
    div(a,b){
        return a/b;
    }
}