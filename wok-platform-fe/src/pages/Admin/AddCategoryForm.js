import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createCategory } from '../../actions/categories';

const AddCategoryForm = ({openPopup, setOpenPopup}) => {
    const dispatch = useDispatch();

    const initialState = {
        name: ''
    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(createCategory(formData));
        setOpenPopup(false);
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth required label='Name' name='name' onChange={handleChange} value={formData.name}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Button type='submit' variant='contained'
            fullWidth
            sx={{
                background: 'black',
                '&:hover':{
                    background: 'grey'
                }
            }}>Submit</Button>
        </Grid>
    </Grid>
    </form>
  )
}

export default AddCategoryForm