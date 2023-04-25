import { Box, Button, Divider, Drawer, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createItem, getItems } from '../../actions/items';
import ItemsGrid from './ItemsGrid';
import AdminLayout from '../../components/AdminLayout';

const initialState ={
    name: null,
    quantity: 0,
    ingredients: null,
    description: null,
    photo: null,
    price: 0
}

const Items = () => {
    const {categoryId} = useParams();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [isAction, setIsAction] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems(categoryId))
      }, [categoryId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSave = () => {
        dispatch(createItem(categoryId, formData));
        setOpenDrawer(false);
    }

  return (
    <AdminLayout>
        <Box>
        <Box sx={{margin: '20px', minHeight: '100vh', justifyContent: 'center', justifyItems: 'center'}}>
            <Button 
            variant="contained" style={{backgroundColor: "black", margin: '10px'}}
            onClick={() => setOpenDrawer(!openDrawer)}
            >Add Item</Button>
            <Divider sx={{margin: '20px'}}/>
            <ItemsGrid />
        </Box>
        <Drawer 
        anchor='right' 
        open={openDrawer} 
        onClose={() => {setOpenDrawer(!openDrawer); setFormData(initialState) }}>
            <Box p={2} width='400px' textAlign='center'>
        <Typography variant='h4'>Add an Item</Typography>
        <Divider />
        <Grid container xs={12} sx={{
            direction: 'column',
            marginTop: '20px',
            alignContent: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center'}}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {
                            formData.photo != null &&
                            <div>
                            <img alt='' src={formData.photo} height='100px'/>
                            </div>
                        }
                        <div>
                            <Typography variant="subtitle2">Choose a photo</Typography>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, photo: base64 })} />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required name='name' label='Item Name' onChange={handleChange}></TextField>
                    </Grid><Grid item xs={12}>
                        <TextField required name='description' label='Item Description' onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required name='ingredients' label='Item Ingredients' onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required name='quantity' label='Item Quantity' onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required name='price' label='Item Price' onChange={handleChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' sx={{background: 'black'}} onClick={handleSave}>Save</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </Box>
        </Drawer>
        </Box>
    </AdminLayout>
  )
}

export default Items;