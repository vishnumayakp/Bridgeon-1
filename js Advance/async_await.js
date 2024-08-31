//Normal working of an promise

// function asyncfn(){
//     return new Promise((resolve,reject)=>{
//          resolve(["Javascript","Python"])
//         // reject("API Failed")
//     })
// }
//  asyncfn()
//  .then((response)=>{
//     console.log(response);  
//  })
//  .catch((reject)=>{
//     console.log("error");
    
//  })


// Using Async/Await function in arrow function

// function asyncfn(){
//     return new Promise((resolve,reject)=>{
//          resolve(["Javascript","Python"])
//         // reject("API Failed")
//     })
// }

// const fetchData = async()=>{
// let  res= await asyncfn()
// console.log(res);  
// }
// fetchData()


// async/await in new constructor

// let asynctry= new Promise((resolve, reject) => {
//     resolve(["Javascript","Python","Java"])
// })


// async function fetchData(){
//     const response=await asynctry
//     console.log(response);
    
// }
// fetchData()



// Fetch API using json placeholder (dummy) ** This is not a generic method 

// const fetchData = async()=>{
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json()
//     console.log(data);
//     }catch(error){
//         console.log(error);    
//     }    
// }
// fetchData()


// Make Generic This code  *** To solve Repetetion of code

//  const genericFetchData = async (url,method)=>{
//     try{
//         const response = await fetch(url,{
//             method:method
//         })
//     const data = await response.json()
//     return data
//     }catch(error){
//         return error   
//     }   
//  }
//  const fetchData = async()=>{
//         try{
//         const response = await genericFetchData('https://jsonplaceholder.typicode.com/todos/1',"POST")  
//         console.log(response);
//         }catch(error){
//             console.log(error);    
//         }    
//     }
//     fetchData()



/// Avoiding try catch block

    // const genericFetchData = async (url)=>{
    //     try{
    //         const response = await fetch(url)
    //     const data = await response.json()
    //     return [data,null]
    //     }catch(error){
    //         return [null,error]   
    //     }   
    //  }
    //  const fetchData = async()=>{
    //     [data,error] = await genericFetchData('https://jsonplaceholder.typicode.com/todos/1')
    //     if(data){
    //         console.log(data);

    //         return  
    //     }

    //     genericError(error)
    //     }
    //     fetchData();
