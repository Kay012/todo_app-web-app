import {CREATE_TASK, SET_TASKS} from './userActions'
// import Users from '../../../models/userModel'

const initialstate ={
    tasks: []
}

export const userReducer = (state= initialstate, action) => {

    switch(action.type){
        case SET_TASKS:
            return {
                tasks: action.tasks
            }
        case CREATE_TASK:
            const newTask = action.task
            return {...state, tasks: state.tasks.concat(newTask)}
    }

    return state
}