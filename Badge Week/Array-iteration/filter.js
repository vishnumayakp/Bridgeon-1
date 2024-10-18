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
        place:'karad'
    }
]

let values=arr.filter((item)=>{
    return item.place=='karad'
})
console.log(values);


