let arr= [
    {
        name:'vishnu',
        salary:20000,
        place:'karad'
    },
    {
        name:'abhay',
        salary:25000,
        place:'rk'
    },
    {
        name:'hrj',
        salary:30000,
        place:'kondotty'
    }
]

// let values=arr.map((item)=>{
//     return {
//         ...item,
//         country:'india'
//     }
// })

let values=arr.map((item)=>{
    return item.name
})
console.log(values);
