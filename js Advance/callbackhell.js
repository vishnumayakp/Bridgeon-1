// function one(callback){
//     callback(5)
// }
// function two(data,callback){
//     callback(data+data)
// }
// function three(data,callback){
//     callback(data*data)
// }
// function four(data,callback){
//     callback(data*data)
// }

// one((data)=>{
//     two(data,(data1)=>{
//         three(data1,(data2)=>{
//             four(data2,(data3)=>{
//                 console.log(data3);
                
//             })
//         })
//     })
// })
// // console.log("Start");


// function get(callback){
//     callback(5)
// }
// function getData2(value,callback){
//         callback(value+value) 
// }
// function getData3(value,callback){
//         callback(value+value)  
// }

// get((value)=>{
//     getData2(value,(value1)=>{
//         getData3(value1,(value2)=>{
//             console.log(value2);
            

//         })
//     })
// })
    
// console.log("End");






// console.log("Start");

function getData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(5)
        }, 1000);
    })
    
}

function getData2(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(data+data)
        }, 1000);
    })
}

function getData3(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //resolve(data*data)
            reject("error")
        }, 1000);
    })
}

getData ()
.then((data1)=>getData2(data1))
.then((data2)=>getData3(data2))
.then((data3)=>console.log(data3))
.catch((error)=>console.log(error))


// console.log("End");


// console.log('Start');
// setInterval(() => {
//     console.log('This will be logged every 2 seconds');
// }, 2000);
// console.log('End');


// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(5)
//         },2000)
//     })
// }

// function getData1(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(data*data)
//         },2000)
//     })
// }

// function getData2(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(data-(data/2))
//         },2000)
//     })
// }

// function getData3(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(data+data)
//         },2000)
//     })
// }
//  async function fetchData() {
//     try{
//         let data= await getData();
//         data= await getData1(data)
//         data= await getData2(data)
//         data= await getData3(data)
//         console.log(data);
        
//     }
//     catch(error){

//     }
//  }
 
// fetchData()