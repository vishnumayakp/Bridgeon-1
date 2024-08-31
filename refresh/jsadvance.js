// function doAnything(){
//     return new Promise((resolve,reject)=>{
//         const status=false;
//         if(status){
//             resolve("Ok")
//         }else{
//             reject("Not ok!")
//         }
//     }) 
// }
// doAnything()
// .then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
    
// })



// function doAnything(){
//     return new Promise((resolve,reject)=>{
//         const status=false;
//         if(status){
//             resolve("Ok")
//         }else{
//             reject("Not ok!")
//         }
//     }) 
// }
// async function fetchData(){
//     try{
//         const value= await doAnything();
//         console.log(value);
//     }
//     catch(error){
//         console.log(error);
        
//     }
    
// }
// fetchData()

fetch("https://api.postalpincode.in/pincode/110001")
.then((data)=>data.json())
.then((data1)=>console.log(data1[0].PostOffice.map((value)=>value.Name))
)


// let arr=[1,2,10,12,5]
// let result=arr.slice(-3,-1)
// console.log(result);


// let arr=[1,2,10]
// let obj={a:1,b:2,c:4}
// let arr1=[...arr,obj]
// console.log(arr1);

//let [a,b,c]=arr
//console.log(b);


// let obj={a:1,b:2,c:4}
// let obj1={...obj}
// console.log(obj1);


// let arr=[1,2,10,12,5]
// arr.splice(2,0,3,4)
// console.log(arr);

