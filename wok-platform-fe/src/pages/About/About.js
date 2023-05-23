import { Box, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          textAlign: 'center',
          p: 2,
          "& h4":{
            fontWeight: 'bold',
            my: 2,
            fontSize: '1.8rem'
          },
          "& p":{
            textAlign: 'justify'
          }
        }}>
          <Typography variant='h4' sx={{
            paddingBottom: '2vh'
          }}>
            Welcome to WOK Restaurant
          </Typography>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt est quam, sit amet faucibus sem interdum eu. Mauris vitae imperdiet urna, vel sodales neque. Etiam eget ullamcorper velit. Ut vitae urna pharetra, consequat urna nec, rhoncus libero. Praesent massa purus, dapibus at gravida ut, aliquam non metus. Aenean convallis, ipsum sed cursus sollicitudin, justo urna rutrum lacus, ac sodales augue turpis vitae felis. Aliquam condimentum accumsan sapien, nec gravida mauris sodales eget. Etiam et nulla sed augue pellentesque rhoncus vitae sed lectus. Proin tincidunt odio eu risus sollicitudin, ac venenatis magna dictum.

Curabitur eu enim ut odio ultrices faucibus. In turpis augue, placerat quis pulvinar non, posuere convallis nisl. Etiam ultrices, nunc sit amet dictum dignissim, massa nunc ullamcorper arcu, id elementum libero purus in mi. Integer finibus vel dui eu rhoncus. Aenean in ornare nisi, in euismod nunc. Proin faucibus efficitur dui, nec ullamcorper tellus posuere id. Mauris vel risus vulputate, tincidunt eros eget, dictum est. Sed nec viverra massa. Aliquam ut imperdiet nunc, non vestibulum lectus. Donec ante neque, bibendum in scelerisque eu, venenatis a purus. Curabitur maximus orci ut ipsum semper, nec vehicula libero lobortis.
          </p>
          <br />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt est quam, sit amet faucibus sem interdum eu. Mauris vitae imperdiet urna, vel sodales neque. Etiam eget ullamcorper velit. Ut vitae urna pharetra, consequat urna nec, rhoncus libero. Praesent massa purus, dapibus at gravida ut, aliquam non metus. Aenean convallis, ipsum sed cursus sollicitudin, justo urna rutrum lacus, ac sodales augue turpis vitae felis. Aliquam condimentum accumsan sapien, nec gravida mauris sodales eget. Etiam et nulla sed augue pellentesque rhoncus vitae sed lectus. Proin tincidunt odio eu risus sollicitudin, ac venenatis magna dictum.

Curabitur eu enim ut odio ultrices faucibus. In turpis augue, placerat quis pulvinar non, posuere convallis nisl. Etiam ultrices, nunc sit amet dictum dignissim, massa nunc ullamcorper arcu, id elementum libero purus in mi. Integer finibus vel dui eu rhoncus. Aenean in ornare nisi, in euismod nunc. Proin faucibus efficitur dui, nec ullamcorper tellus posuere id. Mauris vel risus vulputate, tincidunt eros eget, dictum est. Sed nec viverra massa. Aliquam ut imperdiet nunc, non vestibulum lectus. Donec ante neque, bibendum in scelerisque eu, venenatis a purus. Curabitur maximus orci ut ipsum semper, nec vehicula libero lobortis.
          </p>
        </Box>
    </Layout>
  )
}

export default About;