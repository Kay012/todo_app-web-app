import React from 'react'
import {Route,Switch} from 'react-router-dom'
import CreateTask from './components/createTask/CreateTask'
import Tasks from './components/tasks/Tasks'

const rea = () => (<div>Welcome</div>)
const Pages = () => {
    return (
            <Switch>
                <Route path='/' exact component={Tasks} />
                <Route path='/create_task' exact component={CreateTask} />
                <Route path='/*' component={rea} />
            </Switch>
        
    )
}

export default Pages
