import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position='sticky' color='primary'>
        <Toolbar>
            Calendly Oauth/API Help App
        </Toolbar>
    </AppBar>
  )
}

export default Navbar