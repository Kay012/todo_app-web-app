import React from 'react'
import {Avatar} from '@material-ui/core'
import './Sidebar.css'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFljE39hZfBwAHRvHVJ-5a3_nOMBo_EEZNw&usqp=CAU" alt=''/>
                <Avatar className='avatar'/>
                <h2>MKay</h2>
                <h4>mkay@gmail.com</h4>
            </div>

            <div className='sidebar_details'>
                <div className='sidebar_detail'>
                    <p>Mkhululi</p>
                </div>
                
                <div className='sidebar_detail'>
                    <p>Cebani</p>
                </div>
            </div>

            <div className='sidebar_bottom'>
                <h4>#bio</h4>
            </div>
        </div>
    )
}
