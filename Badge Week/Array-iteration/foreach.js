// let arr=[23,4,5,6,7]
// const findSum=arr.forEach((values)=>{
//     console.log(values);
        
// })


function findSum(arr){
    let sum=0
    let result=arr.forEach(element => {
        console.log(element.salary);
    })
}
console.log(findSum([
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
));

