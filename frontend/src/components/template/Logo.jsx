import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/imgs/logo.png'

export default props => {
    return <aside className="logo">
                <Link to="/" className="logo">
                    <img src={Logo} alt="logo" />
                </Link>
            </aside>
}