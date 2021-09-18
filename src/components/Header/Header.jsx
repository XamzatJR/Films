import React from 'react'
import classes from './Header.module.css'
function Header({children,...props}) {
    return (
        <header className={classes.header}>
            <div className={classes.title}>Movies</div>
            <>
                {children}
            </>
        </header>
    )
    }

export default Header
