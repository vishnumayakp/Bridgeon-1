document.getElementById('para').innerHTML="Document object model"

    let state=false;
document.getElementById('btn').addEventListener('click',function(){
    if(state){
        const demo=document.getElementById('demo')
    demo.style.backgroundColor='white'
    demo.textContent="ON"
    state=false
    }else{
        const demo=document.getElementById('demo')
    demo.style.backgroundColor='hotpink'
    demo.textContent='OFF'
    state=true
    }
})

document.getElementById('change').addEventListener('click', function(){
    const divs=document.getElementsByTagName('div')

    for(let i=0; i<divs.length; i++){
        divs[i].style.backgroundColor='lightblue'
    }
})

document.getElementById('button').addEventListener('click', function(){
    const newpara=document.createElement('p')
    newpara.textContent='created Element'

document.getElementById('create').appendChild(newpara)
})

document.getElementById('ch').addEventListener('click', function(){
    document.querySelector('.text').style.backgroundColor='lightgreen'
})