import { Box, CircularProgress, Grid } from '@mui/material';
import React from 'react';
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';

const ItemsGrid = ({isEdit, setIsEdit, openPopup, setOpenPopup, itemForAction, setItemForAction, setToDelete, setOpenAlert}) => {
    const {items, isLoading} = useSelector(state => state.items);
    console.log(items);

    if (!items.length && !isLoading) return 'No items';

  return (
    isLoading ? 
    <Box item xs={12} display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Box minWidth={'90vw'} textAlign="center">
          <CircularProgress />
        </Box>
      </Box> :
    (<Grid container 
    spacing={3}
    direction="row">
        {items != null && items.map((item) => {
            return (
                <Box>
                    <Grid item key={item.id} style={{margin: 20}}>
                        <ItemCard 
                        item={item} 
                        openPopup={openPopup} 
                        setOpenPopup={setOpenPopup} 
                        isEdit={isEdit} 
                        setIsEdit={setIsEdit}
                        itemForAction={itemForAction}
                        setItemForAction={setItemForAction}
                        setToDelete={setToDelete}
                        setOpenAlert={setOpenAlert}/>
                    </Grid>
                </Box>
            )
        })}
    </Grid>)
  )
}

export default ItemsGrid;