import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import GoogleMaps from './GoogleMaps';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createContact } from '../api';

const Contact = () => {
  const initialState = {
    name: '',
    phoneNumber: '',
    email: '',
    complaint: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    createContact(formData)
    .then(response => {
      setFormData(initialState);
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Layout>
      <Grid container
      spacing={1}
      sx={{
        padding: '10vh'
      }}>
        <Grid item xs={12} md={6}
        sx={{
          maxWidth: '30vh'
        }}>
            <GoogleMaps />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography variant='h6'>
                Write to us and we will get back to you as soon as possible
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container direction='row' spacing={3} 
                sx={{
                  paddingBottom: '5vh'
                  }}>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Your Name" name='name' 
                    value={formData.name} 
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Your Phone Number" name='phoneNumber' 
                    value={formData.phoneNumber} 
                    onChange={handleChange}
                    inputProps={{ maxLength: 10 }}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Your Email" name='email' 
                    value={formData.email} 
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth multiline minRows={3} label="How can we help you?" name='complaint' 
                    value={formData.complaint} 
                    onChange={handleChange}
                    inputProps={{ maxLength: 500 }}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant='text' type='submit' 
                    sx={{
                      color: 'black'
                    }}>Send</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>
                You can also find us here
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{my: 3, "& svg":{
              fontSize: '5vh',
              cursor: 'pointer',
              mr: 2
              },
              "& svg:hover":{
                  color: 'grey',
                  transform: 'translate(5px)',
                  transition: 'all 400ms'
              }
              }}>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <Typography>+40 762 433 648</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Contact;