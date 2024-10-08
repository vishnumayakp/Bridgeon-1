import axios from "axios";
import { setData, setError, setLoading } from "./Store";

function getDataInfo(){
   return  function (dispatch){
        dispatch(setLoading(true))
        axios.get('http://localhost:5000/products')
        .then((res)=>{
            dispatch(setData(res.data))
            dispatch(setLoading(false))
        })
        .catch(()=>{
            dispatch(setLoading(false))
            dispatch(setError('An Error Occured'))
        })
    
    }
}
export default getDataInfo