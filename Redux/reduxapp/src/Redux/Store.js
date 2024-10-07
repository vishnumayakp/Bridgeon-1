import { createStore,combineReducers,applyMiddleware } from "redux"
import logger from 'redux-logger'

    const initialState={
        value:0,
        color:'white'
    }

    const appReducer=combineReducers({
        value,
        color,
        data:dataInfo
    })

    // function appReducer(prevState=initialState, action){
    //     return{
    //         value: valueReducer(prevState.value,action),
    //         color:colorReducer(prevState.color,action)
    //     }
    // }


    function value(prevState=0,action){
        switch (action.type) {
            case 'increment':
                return prevState+1

            case 'decrement':
                return prevState-1

            default:
                return prevState
        }
    }

    function color(prevState='white',action){
        switch (action.type) {
            case 'green':
                return 'green'

            case 'red':
                return 'red'
        
            default:
                return prevState
        }
    }

    function dataInfo(state={
        data:[],
        error:'',
        loading:false
      },action){
        switch (action.type) {
            case 'set-data':
                return{
                    ...state,
                    data:action.payLoad
                }
    
            case 'set-loading':
                return{
                    ...state,
                    loading:action.payLoad
                }
    
            case 'set-error':
            return{
                ...state,
                error:action.payLoad
            }
            
            default:
                return state
        }
      }

//      function increment(){
//         return{
//             type:'increment'
//         }
//      }

//     function decrement(){
//         return {
//             type:'decrement'
//         }
//     } 

//    function green(){
//     return {
//         type:'green'
//     }
//    } 

//   function red(){
//     return{
//         type:'red'
//     }
//   } 

  function setData(data){
    return{
        type:'set-data',
        payLoad:data
    }
  }
  function setLoading(loading){
    return{
        type:'set-loading',
        payLoad:loading
    }
  }
  function setError(error){
    return{
        type:'set-error',
        payLoad:error
    }
  }


  

    const store = createStore(appReducer,applyMiddleware(logger))
    // const state= store.getState()  //to take the currentState
    // console.log(store.getState());
    

    // store.subscribe(()=>{
    //     document.getElementById('value').innerText=store.getState().value;
    // })

    // document.getElementById('value').innerText=state.value

    // document.getElementById('increment').onclick=()=>{
    //     store.dispatch({
    //         type:'increment'
    //     })
    // }
    // document.getElementById('decrement').onclick=()=>{
    //     store.dispatch({
    //         type:'decrement'
    //     })
    // }
    export default store
     export {
    //     increment,
    //     decrement,
    //     green,
    //     red,
        setData,
        setLoading,
        setError
     }
