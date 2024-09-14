import axios from "axios"

export function getData(id){
    return axios.get(`http://localhost:5000/users/${id}`)
}

export function postData(data){
    return axios.post('http://localhost:5000/users',data)
}

export function putData(id,data){
    return axios.put(`http://localhost:5000/users/${id}`,data)   
}

export function patchData(id,data){
    return axios.patch(`http://localhost:5000/users/${id}`,data)   
}

export function deleteData(id){
    return axios.delete(`http://localhost:5000/users/${id}`)
}