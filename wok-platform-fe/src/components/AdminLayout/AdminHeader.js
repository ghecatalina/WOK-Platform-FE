import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../../style/HeaderStyle.css';

const AdminHeader = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
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
                <BrunchDiningIcon />
                Wok Restaurant
            </Typography>
            <Divider />
            <ul className='mobile-menu'>
                <li>
                    <Link to={'/admin/categories'}>Categories</Link>
                </li>
                <li>
                    <Link to={'/admin/dailymenu'}>Daily Menu</Link>
                </li>
                <li>
                    <Link to={'/admin/reservations'}>Reservations</Link>
                </li>
                <li>
                    <Link to={'/admin/contacts'}>Contacts</Link>
                </li>
                <li>
                    <Link to={'/admin/messages'}>Messages</Link>
                </li>
                <li>
                    <Link to={'/login'} onClick={handleClick}>Logout</Link>
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
                        <BrunchDiningIcon />
                        Wok Restaurant
                    </Typography>
                        <Box sx={{display: {xs:'none', sm: 'block'}}}>
                        <ul className='navigation-menu'>
                            <li>
                                <Link to={'/admin/categories'}
                                style={location.pathname === '/admin/categories' 
                                ? {fontWeight: 'bold', textDecoration: 'none', color: 'white'} 
                                : {textDecoration: 'none'}}>Categories</Link>
                            </li>
                            <li>
                                <Link to={'/admin/dailymenu'}
                                style={location.pathname === '/admin/dailymenu' 
                                ? {fontWeight: 'bold', textDecoration: 'none', color: 'white'} 
                                : {textDecoration: 'none'}}>Daily Menu</Link>
                            </li>
                            <li>
                                <Link to={'/admin/reservations'}
                                style={location.pathname === '/admin/reservations' 
                                ? {fontWeight: 'bold', textDecoration: 'none', color: 'white'} 
                                : {textDecoration: 'none'}}>Reservations</Link>
                            </li>
                            <li>
                                <Link to={'/admin/contacts'}
                                style={location.pathname === '/admin/contacts' 
                                ? {fontWeight: 'bold', textDecoration: 'none', color: 'white'} 
                                : {textDecoration: 'none'}}>Contacts</Link>
                            </li>
                            <li>
                                <Link to={'/admin/messages'}
                                style={location.pathname === '/admin/messages' 
                                ? {fontWeight: 'bold', textDecoration: 'none', color: 'white'} 
                                : {textDecoration: 'none'}}>Messages</Link>
                            </li>
                            <li>
                                <Link to={'/login'} onClick={handleClick}>Logout</Link>
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

export default AdminHeader;