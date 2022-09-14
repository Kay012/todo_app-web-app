import React from 'react'
import './TaskAction.css'
const TaskAction = ({Icon, action, color}) => {
    return (
        <div onClick='' className='task_action' style={{color:color}}>
            <Icon className='task_action_icon' style={{color:color}}/>
            <h3>{action}</h3> 
        </div>
    )
}

export default TaskAction
