import React from 'react'
import Create from '@material-ui/icons/Create'
import {Assignment, ExitToApp, List, Search} from '@material-ui/icons'
import './Header.css'
import HeaderOptions from './HeaderOptions'
import { Link } from 'react-router-dom'
const Header = () => {
    const yes = () => {
        return (<div><Link to='/' /></div>)
    }
    
    return (
        <div className="header">
            <div className="header_left">
                <div className="header_search">
                    <h2>Todo`s</h2>
                </div>
            </div>
            
            <div className="header_right">
                <HeaderOptions Icon={List} title='Tasks' onClick='/'/>
                <HeaderOptions Icon={Create} title='Create Task'onClick='/create_task' />
                <HeaderOptions Icon={ExitToApp} title='Logout'/>
            </div>
        </div>
    )
}

export default Header
