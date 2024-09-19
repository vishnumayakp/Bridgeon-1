function Scrambled(str){
    let res1=[]
    let res2=[]
    let value=str.split('')
    for(let i=0; i<value.length; i++){
        if(value[i]==value[i].toLowerCase()){
            res1.push(value[i])
        } else{
            res2.push(value[i])
        }
    }
    return [[res1.join('')],[res2.join('')]]
    
}
console.log(Scrambled("bridGEON"));
console.log(Scrambled("MICROsoft"));
console.log(Scrambled("FacEBoOK"));


