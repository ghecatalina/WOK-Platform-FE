import { Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getItem, updateItem } from '../../actions/items';
import FileBase from 'react-file-base64';
import { useNavigate, useParams } from 'react-router-dom';
import { getItemByCategoryAndId } from '../../api';

const ItemEdit = () => {
    //const item = useSelector(state => state.items);
    const [formData, setFormData] = useState(null);
    const { categoryId, itemId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getItemByCategoryAndId(categoryId, itemId)
        .then(response =>{
            setFormData(response.data);
        })
        .catch(err => {
            console.log(err.message);
        })
        //dispatch(getItem(categoryId, itemId));
    }, [categoryId, itemId]);

    /*useEffect(() => {
        if (item) {
            setFormData(item);
        }
    }, [item]);*/

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleEdit = () => {
        const itemToUpdate = {
            name: formData.name,
            quantity: formData.quantity,
            ingredients: formData.ingredients,
            description: formData.description,
            photo: formData.photo,
            price: formData.price
        };
        dispatch(updateItem(categoryId, formData.id, formData, navigate));
    }

  return (
    !formData ?
    <CircularProgress /> :
    <>
    <Grid container justifyContent='center' alignItems='center'
    sx={{padding: '20px'}}>
    <Paper elevation={3}  sx={{width: '400px', paddingTop: '20px', paddingBottom: '20px'}}>
        <form>
            <Grid container 
            direction='column' 
            justifyContent='flex-start' 
            alignItems='center' 
            spacing={3}>
                <Grid item xs={12}
                direction='column' 
                justifyContent='flex-start' 
                alignItems='center'>
                    <div>
                    <img alt='' src={formData.photo} height='200px'/>
                    </div>
                    <div>
                        <Typography variant="subtitle2">Choose a photo</Typography>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, photo: base64 })} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth required name='name' onChange={handleChange} value={formData.name} />
                </Grid><Grid item xs={12}>
                    <TextField required name='description' onChange={handleChange} value={formData.description}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField required name='ingredients' onChange={handleChange} value={formData.ingredients}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField required name='quantity' onChange={handleChange} value={formData.quantity}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField required name='price' onChange={handleChange} value={formData.price}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' sx={{background: 'black'}} onClick={handleEdit}>Save</Button>
                </Grid>
            </Grid>
        </form>
    </Paper>
    </Grid>
    </>
  )
}

export default ItemEdit