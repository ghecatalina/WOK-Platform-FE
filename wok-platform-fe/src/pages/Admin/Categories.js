import { Box, Button, Divider, Drawer, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CategoriesGrid from './CategoriesGrid';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../../actions/categories';
import AdminLayout from '../../components/AdminLayout';

const schema = yup.object().shape({
    email: yup.string().required(),
  });

const Categories = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schema)});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
      }, [dispatch]);

  return (
    <AdminLayout>
        <Box sx={{margin: '20px', minHeight: '100vh', justifyContent: 'center', justifyItems: 'center'}}>
        <Button 
        variant="contained" style={{backgroundColor: "black", margin: '10px'}}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}>Add Category</Button>
        <Divider sx={{margin: '20px'}}/>
        <CategoriesGrid />
        <Drawer 
        anchor='right' 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(!isDrawerOpen)}>
            <Box p={2} width='400px' textAlign='center'>
        <Typography variant='h4'>Add Category</Typography>
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
                        <TextField required {...register("name", {required: "This field is required"})} label='Category Name'></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' sx={{background: 'black'}} type='submit'>Save</Button>
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

export default Categories;