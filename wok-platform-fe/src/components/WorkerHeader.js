import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Link, useNavigate } from 'react-router-dom';
import '../style/HeaderStyle.css';
import MenuIcon from '@mui/icons-material/Menu';

const WorkerHeader = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    //handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }
 
    const handleClick = () => {
        localStorage.removeItem('tk');
        localStorage.removeItem('id');
        localStorage.removeItem('role');
    }

    //menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center', width: '40vh'}}>
            <Typography 
            color={'black'} 
            variant="h6" 
            component={'div'}
            sx={{flexGrow: 1, my: 2}}>
                <RamenDiningIcon />
                Wok Restaurant
            </Typography>
            <Divider />
            <ul className='mobile-menu'>
                <li>
                    <Link to={'/worker/messages'}>Messages</Link>
                </li>
                <li>
                    <Link to={'/admin/login'} onClick={handleClick}>Logout</Link>
                </li>
            </ul>
        </Box>
    )

  return (
    <>
        <Box>
            <AppBar component={'nav'} sx={{bgcolor: 'black'}}>
                <Toolbar>
                    <IconButton 
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    sx={{
                        mr: 2, 
                        display: {sm: 'none'}
                    }}
                    onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                    color={'white'} 
                    variant="h6" 
                    component={'div'}
                    sx={{flexGrow: 1}}>
                        <RamenDiningIcon />
                        Wok Restaurant
                    </Typography>
                        <Box sx={{display: {xs:'none', sm: 'block'}}}>
                        <ul className='navigation-menu'>
                            <li>
                                <Link to={'/worker/messages'}>Messages</Link>
                            </li>
                            <li>
                                <Link to={'/admin/login'} onClick={handleClick}>Logout</Link>
                            </li>
                        </ul>
                        </Box>
                </Toolbar>
            </AppBar>
            <Box component={'nav'}>
                <Drawer variant='temporary' 
                open={mobileOpen} 
                onClose={handleDrawerToggle}
                sx={{display: {xs:'block', sm: 'none'}}}>
                    {drawer}
                </Drawer>
            </Box>
            <Box>
                <Toolbar />
            </Box>
        </Box>
    </>
  )
}

export default WorkerHeader;