import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { createItem, updateItem } from '../../../actions/items';

const AddEditItemForm = ({
    openPopup, 
    setOpenPopup, 
    isEdit,
    item}) => {
    const {categoryId} = useParams();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(item);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleAction = (e) => {
        e.preventDefault();
        const itemToUpdate = {
            name: formData.name,
            quantity: parseInt(formData.quantity),
            ingredients: formData.ingredients,
            description: formData.description,
            photo: formData.photo,
            price: parseInt(formData.price)
        };
        if (isEdit){
            dispatch(updateItem(categoryId, formData.id, itemToUpdate));
        }else{
            dispatch(createItem(categoryId, itemToUpdate));
        }
        setOpenPopup(false);
    }

  return (
    <form onSubmit={(e) => handleAction(e)}>
            <Grid container 
            direction='row' 
            justifyContent='flex-start' 
            alignItems='center' 
            spacing={3}>
                <Grid item xs={12} md={6}
                direction='column' 
                justifyContent='flex-start' 
                alignItems='center'>
                    <Grid container 
                    direction='row' 
                    justifyContent='flex-start' 
                    alignItems='center' >
                        <Grid item xs={12}>
                            <div>
                            <img alt='' src={formData.photo} height='300vh'/>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <Typography variant="subtitle2">Choose a photo</Typography>
                                <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, photo: base64 })} />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField 
                    fullWidth 
                    required 
                    label='Name' 
                    name='name' 
                    onChange={handleChange} 
                    value={formData.name} />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth 
                    required 
                    label='Description' 
                    name='description' 
                    onChange={handleChange} 
                    value={formData.description}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth 
                    required 
                    label='Ingredients' 
                    name='ingredients' 
                    onChange={handleChange} 
                    value={formData.ingredients}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth 
                    required 
                    label='Quantity' 
                    name='quantity' 
                    type='number' 
                    pattern="[0-9]+" 
                    onChange={handleChange} 
                    value={formData.quantity}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            g
                          </InputAdornment>
                        ),
                      }}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth 
                    required 
                    label='Price' 
                    name='price' 
                    type='number' 
                    pattern="[0-9]+" 
                    onChange={handleChange} 
                    value={formData.price}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            RON
                          </InputAdornment>
                        ),
                      }}></TextField>
                </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                    fullWidth 
                    type='submit'
                    variant='contained' 
                    sx={{background: 'black'}}>Save</Button>
                </Grid>
            </Grid>
        </form>
  )
}

export default AddEditItemForm;