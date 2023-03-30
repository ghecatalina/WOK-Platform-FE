import { Box, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
    <Box sx={{
        textAlign: 'center', 
        bgcolor: 'black', 
        color: 'white', 
        p: 3}}>
        <Box sx={{my: 3, "& svg":{
            fontSize: '5vh',
            cursor: 'pointer',
            mr: 2
            },
            "& svg:hover":{
                color: 'grey',
                transform: 'translate(5px)',
                transition: 'all 400ms'
            }
        }}>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
        </Box>
        <Typography variant='h5' sx={{fontSize: '1rem'}}>
            All Rights Reserved &copy; WOK Restaurant
        </Typography>
    </Box>
    </>
  )
}

export default Footer;