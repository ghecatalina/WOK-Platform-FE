import { Box, Button, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from '../../../api/index';
import Layout from '../../../components/Layout/Layout';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { signin } from '../../../actions/auth';

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
    const [showPassword, setShowPassowrd] = useState(false);
    const dispatch = useDispatch();

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
        
        dispatch(signin(userInfo, navigate));
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
                        <TextField 
                        {...register("password", {required: "This field is required", minLength: {value: 8, message: "Min length is 8"}})} 
                        label="Password" variant="standard" fullWidth style={{paddingTop: '10px', paddingBottom: '10px'}}
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                        endAdornment:
                        <InputAdornment position="end">
                            <IconButton
                            onClick={() => setShowPassowrd(!showPassword)}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }}/>
                        <Typography color='red' variant="body2">{errors.password?.message}</Typography>
                        <Typography color='red' variant="body2">{err}</Typography>
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
                        <Button variant="contained"type="submit" fullWidth>Login</Button>
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