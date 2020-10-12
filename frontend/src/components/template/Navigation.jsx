import './Navigation.css'
import React from 'react'

import NavigationItem from './NavigationItem'

export default props => {
    return <aside className="menu-area">
                <NavigationItem  icon="home" text="Início" link="/"/>
                <NavigationItem  icon="users" text="Usuários" link="/users"/>
            </aside>
}