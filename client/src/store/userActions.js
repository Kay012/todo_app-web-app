import {useSelector} from 'react-redux'
import axios from 'axios'
export const CREATE_TASK = 'CREATE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = ' DELETE_TASK'
export const SET_TASKS = 'SET_TASKS'

const baseUri = 'http://localhost:8000'
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjY3YjJlYjcxOTcxMTZhMDFiNWEwZCIsImlhdCI6MTYyMzA1NDE1MiwiZXhwIjoxNjIzMDU1MDUyfQ.HrqfxD1pT6yMH1ZY4qdzc-h9zoL7m-_JeV7q50ucq5c"

export const createTask = (task, tasks) => {
    return async dispatch => {
        try{
            const newTask = await axios.patch( baseUri + '/user/add_task', {tasks :[...tasks, task]}, {
                headers: {Authorization: token}
            })
            console.log(newTask)
    
            dispatch({type: CREATE_TASK, task:task})
        }catch(err){
            console.log(err.response.data.msg)
        }
        
    }
}

export const updateTask  = (tasks)=> {
    return async dispatch => {
        try{
            const newTask = await axios.patch( baseUri + '/user/add_task', {tasks :[...tasks]}, {
                headers: {Authorization: token}
            })
            console.log(newTask)
    
            // dispatch({type: CREATE_TASK, task:task})
        }catch(err){
            console.log(err.response.data.msg)
        }
        
    }
}



export const fetchUser = () => {
    return async dispatch => {
        try{
            const resData = await axios.get(baseUri + '/user/infor', {
                headers: {Authorization: token}
            })
            dispatch({type: SET_TASKS, tasks:resData.data.tasks})
        }catch(err){
            console.log(err.response.data.msg)
        }
        
        
    }
}