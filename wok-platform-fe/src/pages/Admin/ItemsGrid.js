import { Box, Grid } from '@mui/material';
import React from 'react';
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';

const ItemsGrid = () => {
    const items = useSelector(state => state.items);
    console.log(items);

  return (
    <Grid container 
    spacing={3}
    direction="row">
        {items != null && items.map((item) => {
            return (
                <Box>
                    <Grid item key={item.id} style={{margin: 20}}>
                        <ItemCard item={item} />
                    </Grid>
                </Box>
            )
        })}
    </Grid>
  )
}

export default ItemsGrid;