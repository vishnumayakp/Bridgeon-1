// let arr=[1,2,3,4,5,[10,20,30,40,50]]
//  let[a,b,c,d,e,f,[k,l,m,n,o]]=arr

// console.log(f);


//  let [a,b,c,d,[k,...rest]]=[1,2,3,4,[5,6,7,8]]
//  console.log(rest);


// let {name,place,salary,degree,obj:{home,life},parents:{mother,father}}={name:"Amaya",place:"karad",salary:10000,degree:"BSc cs",obj:{home:"homeless",life:"good"},parents:{mother:"Laksmi",father:"sunderan"}}

//  console.log(mother);


// Swapping Variables

// let a=10;
// let b=20;
// let c=40;
// [a,b,c]=[c,b,a]
// console.log(b);

//Extracting values from an array

// let arr=[1,2,3,4,5]
// let [a,b,c]=arr
// console.log(a,b,c);


//Skipping Values from an array

// let arr=[1,2,3,4,5]

// let [a,b,,,e]=arr
// console.log(e);



//Destructuring objects

//  const person={
//     name:"Vishnu",
//     place:"Karad",
//     salary:1000
//  };
//  const {name,...rest}=person;
//  console.log(rest);


// Default value destructuring

// let obj={name:"Abhay"}
// let {name,age=30,place="karad"} = obj
// console.log(name,age,place);

 
//Nested Destructuring

// const obj1={
//     name:"Vishnumaya",
//     age:20,
//     obj2:{
//         place:"Karad",
//         salary:40000
//     }
// }

// let{name,age,obj2:{place,salary}}=obj1
// console.log(salary);


// let arr=[{ a:10, b:20, c:50, d:40},
//     { a:40, b:10, c:70, d:50},
//     { a:60, b:30, c:90, d:30}
// ]
// let [first,{a,b,c},third]=arr
// console.log(b);



// let arr=[{ a:10, b:20, c:50, d:40},
//     { a:40, b:10, c:70, d:50},
//     { a:60, b:30, c:90, d:30}
// ]
// let [first,{a,b,c},third]=arr
// console.log(b);

 
// let arr=[[1,2],[6,3,4],[5,7]]
// let [a,[b,c,d],e]=arr
//  console.log(e);

function findValue({name,age,place}){
return `my name is ${name}, iam ${age} year old and iam from ${place}` 
}
let person={name:"Vishnu",age:20,place:"karad"}
console.log(findValue(person));
