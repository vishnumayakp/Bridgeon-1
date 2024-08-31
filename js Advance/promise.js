// function  status(){
//     return new Promise((resolve, reject) => {
//         let status=true
//         if(status){
//             resolve("Haiii")
//         }else{
//             reject("hoii")
//         }
//     })
// }
// status
// .then((res)=>{
//     console.log(res);
// })


// function status(callback){
//     callback("Haii")
// }
//  status((value)=>{
//     console.log(value);
    
//  })


    // Chaining promise-

// function getData(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(num)
//         }, 2000);
//     })
// }

// function getData1(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(num)
//         }, 2000);
//     })
// }ṭ

// getData(5)
// .then((response)=>{
//    return getData1(response+5)  
// })
// .then((response)=>{
//     console.log(response);
// })



//promise.all()

// function promise1(){
//     return new Promise((resolve,reject)=>{
//         //resolve(["Python","JavaScript"])
//          reject("API Failed")
//     })
// }

// function promise2(){
//     return new Promise((resolve,reject)=>{
//         resolve(["Java","Android"])
//     })
// }

// function promise3(){
//     return new Promise((resolve,reject)=>{
//         resolve(["Java","Android"])
//     })
// }

// let allpromise= Promise.all([promise1(),promise2(),promise3()])
// allpromise
// .then((res)=>{
//     console.log(res.flat(Infinity));
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })


    //promise.allsettled()

// function promise1(){
//     return new Promise((resolve,reject)=>{
//         //resolve(["Python","JavaScript"])
//          reject("API Failed")
//     })
// }

// function promise2(){
//     return new Promise((resolve,reject)=>{
//         resolve(["Java","Android"])
//     })
// }

// function promise3(){
//     return new Promise((resolve,reject)=>{
//         resolve(["Java","Android"])
//     })
// }

// let allpromise= Promise.allSettled([promise1(),promise2(),promise3()])
// allpromise
// .then((res)=>{
//     let arrvalues=res.filter(result=> result.status === "fulfilled")
//      .map(result=> result.value)

//     let mergedarr=[].concat(...arrvalues);

//     console.log(mergedarr);
    
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })



//promise.any


function promise1(){
    return new Promise((resolve,reject)=>{
        //resolve(["Python","JavaScript"])
         reject("API Failed")
    })
}

function promise2(){
    return new Promise((resolve,reject)=>{
        resolve(["Java","Android"])
    })
}

function promise3(){
    return new Promise((resolve,reject)=>{
         //resolve(["Java","Android"])
        reject("API Failed")
    })
}

let allpromise= Promise.any([promise1(),promise2(),promise3()])
allpromise
.then((res)=>{
    console.log(res);
    
})
.catch((error)=>{
    console.log(error);
    
})



//promise.race()



// function promise1(){
//     return new Promise((resolve,reject)=>{
//         //resolve(["Python","JavaScript"])
//          reject("API Failed")
//     })
// }

// function promise2(){
//     return new Promise((resolve,reject)=>{
//         resolve(["Java","Android"])
//     })
// }

// function promise3(){
//     return new Promise((resolve,reject)=>{
//         // resolve(["Java","Android"])
//         reject("API Failed")
//     })
// }

// let allpromise= Promise.race([promise1(),promise2(),promise3()])
// allpromise
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })
