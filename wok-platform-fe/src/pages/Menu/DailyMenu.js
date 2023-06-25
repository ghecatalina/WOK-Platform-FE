import React from 'react';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import DailyMenuItemCard from './DailyMenuItemCard';

const DailyMenu = () => {

  const dailyMenu = useSelector(state => state.dailyMenu);

  return (
      !dailyMenu  ? 
      <Box item xs={12} display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Box minWidth={'90vw'} textAlign="center">
          <CircularProgress />
        </Box>
      </Box> :
      <>
      <Grid container spacing={3} 
        justifyContent='space-around' 
        alignItems='center'
        sx={{
            paddingTop: '5vh',
            paddingLeft: '10vh',
            paddingBottom: '5vh',

        }}>
        <Grid item xs={12}>
          <Typography variant='h4'>
          Today's Menu
          </Typography>
        </Grid>
      
        <Grid item xs ={12}>
        <Box 
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box sx={12} mx={2} width='40vh'>
            <DailyMenuItemCard item={dailyMenu.firstDish}/>
          </Box>
          <Box sx={12} mx={2} width='40vh'>
            <DailyMenuItemCard item={dailyMenu.secondDish} />
          </Box>
        </Box> 
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>
            Price: {dailyMenu.price} RON
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default DailyMenu