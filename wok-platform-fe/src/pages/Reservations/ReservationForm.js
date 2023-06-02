import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { createReservation } from '../../api';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const ReservationForm = ({table, date}) => {
    const navigate = useNavigate();

    const initialState = {
        tableId: Number(table.id),
        noOfPeople: Number(table.size),
        name: '',
        phoneNumber: '',
        details: '',
        reservationTime: format(date, "yyyy-MM-dd'T'HH:mm:ss")
    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        createReservation(formData)
        .then(response => {
            navigate('/');
        })
        .catch(err => {
            console.log(err.message);
        })
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant='h6'>
                Table {table.number} with {table.size} places for {format(date, 'yyyy-MM-dd HH:mm')}
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
            <Button type='submit' variant='contained' fullWidth
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

export default ReservationForm