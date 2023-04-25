import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { updateReservationById } from '../../actions/reservations';

const EditReservationForm = ({reservation, openPopup, setOpenPopup}) => {
    const initialState = {
        name: reservation.name,
        phoneNumber: reservation.phoneNumber,
        details: reservation.details
    };
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = {
            date: reservation.date
        };
        dispatch(updateReservationById(Number(reservation.id), formData, date));
        setOpenPopup(false);
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant='body1'>
                Table {reservation.tableNumber}
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='body1'>
            Date {reservation.date}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth required label='Name' name='name' onChange={handleChange} value={formData.name}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth required label='Phone Number' name='phoneNumber' onChange={handleChange} value={formData.phoneNumber} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>
            <Grid item xs={12}>
                <TextField fullWidth label='Details' multiline minRows={5} name='details' onChange={handleChange} value={formData.details}/>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Button type='submit' variant='contained'
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

export default EditReservationForm