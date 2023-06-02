import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { getAvailableTables } from '../../api';
import { useNavigate } from 'react-router-dom';
import ReservationPopup from './ReservationPopup';
import ReservationForm from './ReservationForm';

const ReserveTable = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [partySize, setPartySize] = useState(1);
  const [availableTables, setAvailableTables] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  const [tableToReserve, setTableToReserve] = useState(null);

  const handleClik = (table) =>{
    //navigate('/');
    setTableToReserve(table);
    console.log(tableToReserve);
    setOpenPopup(true);
  }

  const handlePartySizeChange = (event) => {
    const inputNumber = parseInt(event.target.value);

    if (isNaN(inputNumber)) {
      setPartySize(null);
      return;
    }

    if (inputNumber >= 1 && inputNumber <= 10) {
      setPartySize(inputNumber);
    }
  };

  const fetchAvailableTables = () =>{
    const formData = {
      dateTime: format(selectedDate, 'yyyy-MM-dd hh:mm:ss'),
      size: partySize
    };
    getAvailableTables(formData)
    .then(response =>{
      setAvailableTables(response.data);
    })
    .catch(err =>{
      console.log(err.message);
    })
    console.log(availableTables);
  }

  return (
    <Layout>
        <Box sx={{paddingTop: '4vh'}}>
          <Box>
            <form>
              <Grid container
              sx={{
                // display: 'flex',
                // justifyContent: 'flex-start',
                // alignItems: 'center',
                minHeight: '100vh',
                // mx: 'auto',
                // my: 'auto'
            }}>
              <Grid item xs={12} md={6}>
                <Grid container 
                spacing={3}
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                sx={{
                  mx: 'auto',
                  my: 'auto'
                }}>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                    ampm={false}
                    label="Choose reservation time"
                    inputFormat="DD-MM-YYYY HH:mm"
                    value={selectedDate}
                    onChange={(newValue) => {
                      handleDateChange(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label='Choose the party size' 
                    InputProps={{
                      inputProps: {
                        min: 1,
                        max: 10,
                      },
                      onChange: handlePartySizeChange,
                    }}
                    value={partySize}/>
                  </Grid>
                  <Grid item xs={12}
                  sx={{
                    "& button":{
                      background: 'black'
                    },
                    "& button:hover":{
                        background: 'grey',
                        transform: 'translate(5px)',
                        transition: 'all 400ms'
                    }}}>
                    <Button variant='contained' 
                    onClick={fetchAvailableTables}>See available tables</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                  <Grid container spacing={3}
                  sx={{
                    paddingRight: '5vh'
                  }}>
                    {
                      availableTables && availableTables.length > 0 &&
                      availableTables.map((table) =>{
                        return(
                          <>
                          <Grid item xs={4}>
                          <Box onClick={() => handleClik(table)}
                          sx={{
                            maxWidth: '50vh',
                            background: 'grey',
                            padding: '2vh',
                            borderRadius: '10px',
                            color: 'white',
                            "&:hover":{
                              background: 'black',
                              transform: 'translate(5px)',
                              transition: 'all 400ms',
                              cursor: 'pointer'
                          }}}>
                              <Typography>
                                  Table {table.number}
                              </Typography>
                              <Typography>
                                  No of places: {table.size}
                              </Typography>
                          </Box>
                          </Grid>
                          </>
                        )
                      })
                    }
                  </Grid>
              </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
        <ReservationPopup title="Reserve table" openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <ReservationForm 
          table={tableToReserve}
          date={selectedDate}/>
        </ReservationPopup>
    </Layout>
  )
}

export default ReserveTable;