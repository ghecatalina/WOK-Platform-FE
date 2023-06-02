import React from 'react';
import banner from '../../assets/ezgif.com-webp-to-jpg.jpg';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import '../../style/HomeStyle.css';

const Home = () => {
  const navigate = useNavigate();

  const goToMenuPage = () => {
    navigate('/menu');
  }

  const goToReservations = () => {
    navigate('/reservations');
  }

  return (
    <Layout>
        <div className='home' style={{backgroundImage: `url(${banner})`}}>
          <div className='header-container'>
            <h1>WOK</h1>
            <p>Best Food In Town</p>
            <Box className='button-box' sx={{margin: '10px 10px 10px 0', 
            "& button":{
              background: 'black'
            },
            "& button:hover":{
                background: 'grey',
                transform: 'translate(5px)',
                transition: 'all 400ms'
            }}}>
              <Button variant='contained' sx={{background: 'black', marginRight: '10px'}} onClick={goToReservations}>Reserve a table</Button>
              <Button variant='contained' sx={{background: 'black'}} onClick={goToMenuPage}>Menu</Button>
            </Box>
          </div>
        </div>
    </Layout>
  )
}

export default Home;