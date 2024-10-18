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

let found = arr.find((item)=>{
    return item.salary<40000
})
console.log(found);
