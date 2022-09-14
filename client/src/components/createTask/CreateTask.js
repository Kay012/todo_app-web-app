import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import DatePicker from 'react-datepicker'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './CreateTask.css'

import {useSelector} from 'react-redux'

import * as TaskActions from '../../store/userActions'

const initialState = {
    title: '',
    description:'',
    dueDate: '2021-05-24T10:30'
}



const CreateTask = () => {

    const tasks = useSelector(state=> state.tasks.tasks)
    const [task,setTask] = useState(initialState)

    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        // await dispatch(TaskActions.fetchUser())
        console.log(tasks)
        tasks.forEach(t => {
            console.log("Eish")
            if(t.title === task.title){
                t.description = task.description
                t.dueDate = task.dueDate
                dispatch(TaskActions.updateTask(tasks))
            }
            else{
                dispatch(TaskActions.createTask(task, tasks))
            }
        })
        window.location.href='/'
        // await dispatch(TaskActions.createTask(task, tasks))
    }


    useEffect( async() => {
     dispatch(TaskActions.fetchUser())
    },[])

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setTask({...task, [name]: value})
    }
    
    return (
        <div className='create_task'>
            <form onSubmit={onSubmitHandler}>
                <div className="row">
                    <label htmlFor='title'>Task Title</label> 
                    <input type='text' name='title' id='title' 
                    value={task.title} onChange={onChangeHandler}/>
                </div>

                <div className="row">
                    <label htmlFor='description'>Description: </label> 
                    <textarea type='text' rows='7' name='description' id='description' 
                    value={task.description} onChange={onChangeHandler}/>
                </div>

                <div className="row">
                    <label htmlFor='dueDate'>Due Date: </label> 
                    <TextField type='datetime-local' name='dueDate' id='dueDate' 
                    value={task.dueDate} onChange={onChangeHandler}/>
                    {/* <input type='text' name='due_date' id='due_date' 
                    value={dueDate}/> */}
                </div>
                <Button type='submit' className='button' >Submit</Button>
                
            </form>
            
        </div>
    )
}

export default CreateTask
