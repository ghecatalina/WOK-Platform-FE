import { Box, Button, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { sendClientMessage, setConnection } from '../actions/messages';
import { Label } from '@mui/icons-material';
import Layout from '../components/Layout/Layout';

const Messages = () => {
    const { tableId } = useParams();
    const initialState = {
        type: null,
        tableNo: Number(tableId),
        pay: 'Card',
        tip: 0
    };
    const [isGetCheck, setIsGetCheck] = useState(false);

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        setConnection();
      }, []);

    const callWaiter = () =>{
        setFormData({...formData, type: 'CallWaiter'});
        sendClientMessage(formData);
    }

    const getCheck = () => {
        setFormData({...formData, type: 'GetCheck'});
        if (!isGetCheck){
            setIsGetCheck(true);
        }
        else{
            sendClientMessage(formData);
            //console.log(formData);
        }
    };

  return (
    <>
        <div>Messages</div>
        <Layout>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90vh'
              }}>
                <Grid container maxWidth={'50vh'} spacing={3}
                sx={{
                "& button":{
                  background: 'black',
                  minWidth: '40vh'
                },
                "& button:hover":{
                    background: 'grey',
                    transform: 'translate(5px)',
                    transition: 'all 400ms'
                }}}>
                    <Grid item xs={12}>
                        <Typography variant='h5'>
                            How can we help you?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' onClick={callWaiter}>Call Waiter</Button>                
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button variant='contained' onClick={getCheck}>Get Check</Button>
                            </Grid>
                        {
                        isGetCheck && 
                        <>
                            <Grid item xs={12}>
                                <RadioGroup name='pay'
                                value={formData.pay}
                                onChange={(e) => setFormData({...formData, pay: e.target.value})}>
                                    <FormControlLabel control={<Radio />} label='Card' value='Card'/>
                                    <FormControlLabel control={<Radio />} label='Cash' value='Cash'/>
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='subtitle'>
                                    Tipping is not mandatory, but is well appreciated
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                type='number' 
                                pattern="[0-9]+"
                                value={formData.tip}
                                label='Tip' 
                                onChange={(e) => setFormData({...formData, tip: parseInt(e.target.value)})}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        %
                                      </InputAdornment>
                                    ),
                                  }}/>
                            </Grid>
                        </>
                        }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    </>
  )
}

export default Messages;