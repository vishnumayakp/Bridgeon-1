// Promise //

// function getApi(num,callback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },1000)
//     })    
//  }

//  function getApi2(num,callback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },1000)
//     })    
//  }

//  getApi(5)
//  .then((res)=>{
//     return getApi2(res+5)
//  })
//  .then((res)=>{
//     console.log(res);
    
//  })