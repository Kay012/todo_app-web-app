import React, { useEffect } from 'react'
import {DeleteForever, EditOutlined, Schedule, Search} from '@material-ui/icons'
import {Avatar, IconButton} from '@material-ui/core'
import './Tasks.css'
import TaskAction from './TaskAction'
import * as TaskActions from '../../store/userActions'
import { useDispatch, useSelector } from 'react-redux'

const Tasks = () => {

    const tasks = useSelector(state => state.tasks.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TaskActions.fetchUser())
       },[])

    const deleteTaskHandler = (task) => {
        tasks.forEach(tsk => {
            if(tsk.title === task.title){
                delete tasks[task]
                dispatch(TaskActions.updateTask(tasks))
            }
        })
    }

    // const deleteTask = (task) => {
    //     console.log(tasks)
    //     tasks.forEach(tsk => {
    //         if(tsk.title === task.title){
    //             delete tasks[task]
    //         }
    //     })
    //     console.log(tasks)
        
    // }

    return (
        <div className='tasks'>
            <div className="task_search">
                <div className="input_container">
                    <Search />
                    <input type='text' placeholder='Search'/>
                </div>
            </div>

            {
                tasks.map(task => (
                <div className="task_item">
                    <div className="task_header">
                        <Avatar className='avatar'/>
                        <h3 className="task_title">{task.title}</h3>
                    </div>
                    <div className="task_body">
                        < p>
                            {task.description}
                        </p>
                    </div>
                    <div className="task_details">
                        <div>Due: <span>{new Date(task.dueDate).toLocaleString()}</span></div>
                        <div className="task_actions">
                            <IconButton>
                                <TaskAction  Icon={EditOutlined} action='Edit' color='blue'/>  
                            </IconButton>
                            <IconButton onCLick={deleteTaskHandler(task)}>
                                <TaskAction  Icon={DeleteForever} action='Delete' color='crimson'/>
                            </IconButton>
                            
                        </div>
                        
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Tasks
