import { AppBar, Toolbar } from '@mui/material';
import React from 'react'

const Header = () => {
    return (
        <AppBar style={{ minWidth: '100vh' }} position="static">
            <Toolbar>
                <img src='/logo.png' height={40} width={40} alt='QarrotIO' />
                {/* <Icon> */}
                {/* </Icon> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;