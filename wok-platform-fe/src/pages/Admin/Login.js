import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from '../../api/index';

const initialState = {email: '', password: ''};

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

const Login = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schema)});
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);
    const [err, setErr] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(e.target.value);
        console.log(formData);
    }

    const sendLoginData = (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        //e.preventDefault();
        login(userInfo)
        .then(response => {
            localStorage.setItem('tk', response?.data.tk);
            localStorage.setItem('id', response?.data.id);
            localStorage.setItem('role', response?.data.role);
            navigate('/admin/categories');
        })
        .catch(error => {
            console.log(error.response.data.Message);
            setErr(error.response.data.Message);
        })
        reset();
    }

  return (
    <>
    <Layout>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Paper sx={{maxWidth: '300vh'}}>
                <Grid container spacing={3} sx={{padding: '10vh'}}>
                <form onSubmit={handleSubmit(data => sendLoginData(data))}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Welcome back</Typography>
                        <Typography variant="h5">Login to your account</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("email", {required: "This field is required"})} type="text" label="Email" variant="standard" fullWidth style={{paddingTop: '10px', paddingBottom: '10px'}}/>
                        <Typography color='red' variant="body2">{errors.email?.message}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("password", {required: "This field is required", minLength: {value: 8, message: "Min length is 8"}})} type="password" label="Password" variant="standard" fullWidth style={{paddingTop: '10px', paddingBottom: '10px'}}/>
                        <Typography color='red' variant="body2">{errors.password?.message}</Typography>
                        <Typography color='red' variant="body2">{err}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" style={{backgroundColor: "black"}} type="submit">Login</Button>
                    </Grid>
                </form>
                </Grid>
            </Paper>
        </Box>
    </Layout>
    </>
  )
}

export default Login;