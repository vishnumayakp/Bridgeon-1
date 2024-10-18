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

// let value=arr.reduce((total,item)=>{
//     return total+item.salary
// },0)
// console.log(value);

let value=arr.reduce((total,item)=>{
    total.push(item.name)
    return total
},[])
console.log(value);

