import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderOptions.css'
const HeaderOptions = ({Icon, title, onClick }) => {
    return (
        <div className="headerOption">
            <Link to={onClick}>
                {Icon && <Icon className="headerOption_icon"/> }
                <h3 className="headerOption_title">{title}</h3>
            </Link>
            
        </div>
    )
}

export default HeaderOptions
