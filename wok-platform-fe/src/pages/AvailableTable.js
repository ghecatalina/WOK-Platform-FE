import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AvailableTable = ({table}) => {

  return (
    <Grid item xs={4}>
    <Box
    sx={{
      maxWidth: '50vh',
      background: 'grey',
      padding: '2vh',
      borderRadius: '10px',
      color: 'white',
      "&:hover":{
        background: 'black',
        transform: 'translate(5px)',
        transition: 'all 400ms',
        cursor: 'pointer'
    }}}>
        <Typography>
            Table {table.number}
        </Typography>
        <Typography>
            No of places: {table.size}
        </Typography>
    </Box>
    </Grid>
  )
}

export default AvailableTable;