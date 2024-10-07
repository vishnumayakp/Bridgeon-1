function testMiddleWare({dispatch,getState}){
    return(next)=>{
        return (action)=>{
            console.log(getState());
            console.log('ACTION',action);
            next(action)
            console.log(getState());
            console.log('_____________________');
            
            
        }
    }
}
export default testMiddleWare