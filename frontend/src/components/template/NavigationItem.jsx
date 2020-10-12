import './Navigation.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    return <nav className="menu">
                <Link to={props.link}>
                    <i className={`fa fa-${props.icon}`}></i> {props.text}
                </Link>
            </nav>
}