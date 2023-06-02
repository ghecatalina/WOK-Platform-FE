import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDailyMenuById, updateDailyMenuById } from '../../../actions/dailyMenu';
import { Autocomplete, Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import { getItemsByCategory } from '../../../api';
import AdminLayout from '../../../components/AdminLayout/AdminLayout';

const ids = {
    soupId: '00000000-0000-0000-0000-000000000002',
    mainCourseId: '00000000-0000-0000-0000-000000000003'
}

const DailyMenu = () => {
    const dailyMenu = useSelector(state => state.dailyMenu);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(null);
    const [soups, setSoups] = useState(null);
    const [mainCourses, setMainCourses] = useState(null);
    const [firstDish, setFirstDish] = useState(null);
    const [secondDish, setSecondDish] = useState(null);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        dispatch(getDailyMenuById());
    },[dispatch]);

    useEffect(() =>{
        getItemsByCategory(ids.soupId)
        .then(response =>{
            setSoups(response.data);
        })
        .catch(err =>{
            console.log(err.message);
        })
        getItemsByCategory(ids.mainCourseId)
        .then(response =>{
            setMainCourses(response.data);
        })
        .catch(err =>{
            console.log(err.message);
        })
    },[]);

    useEffect(() =>{
        if (dailyMenu != null){
            setFormData({
                firstDish: dailyMenu.firstDish.id,
                secondDish: dailyMenu.secondDish.id,
                price: Number(dailyMenu.price)
            });

            setFirstDish(dailyMenu.firstDish);
            setSecondDish(dailyMenu.secondDish);
            setPrice(dailyMenu.price);
        }
    },[dailyMenu]);

    const handleSaveDailyMenu = () => {
        dispatch(updateDailyMenuById(formData));
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
    }

  return (
    <AdminLayout>
        <Grid container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
            minHeight: '100vh'
        }}>
            <Grid item xs={12} alignItems="center">
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    mx: 'auto',
                    my: 'auto'
                }}>
                <Paper elevation={4} 
                sx={{
                    width: '400px', 
                    padding: '20px'
                }}>
                    <form>
                    <Grid container 
                    spacing={3}
                    justifyContent='center'
                    justifyItems='center'>
                        {formData && soups && mainCourses ?
                        <>
                        <Grid item xs={12}>
                            <Typography variant='h5'>
                                Daily Menu
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <Autocomplete
                        id="firstDish"
                        defaultValue={firstDish}
                        options={soups}
                        autoHighlight
                        getOptionLabel={(option) => option.name}
                        onChange={(event, newValue) => {setFormData({...formData, firstDish: newValue.id})}}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="50"
                                src={option.photo}
                                alt=""
                            />
                            {option.name}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Choose a first dish"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <Autocomplete
                        id="secondDish"
                        defaultValue={secondDish}
                        options={mainCourses}
                        autoHighlight
                        getOptionLabel={(option) => option.name}
                        onChange={(event, newValue) => {setFormData({...formData, secondDish: newValue.id})}}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="50"
                                src={option.photo}
                                alt=""
                            />
                            {option.name}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Choose a second dish"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                        />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label='Price' defaultValue={price}
                            name='price' 
                            onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth
                            sx={{
                                "&":{
                                  background: 'black',
                                },
                                "&:hover":{
                                    background: 'grey',
                                }}}
                            onClick={handleSaveDailyMenu}>Save</Button>
                        </Grid>
                        </>
                        :
                        <CircularProgress />}
                    </Grid>
                    </form>
                </Paper>
                </Box>
            </Grid>
        </Grid>
    </AdminLayout>
  )
}

export default DailyMenu;