import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img3 from '../../assets/about-images/img3.jpg';
import img4 from '../../assets/about-images/img4.jpg';
import img5 from '../../assets/about-images/img5.jpg';
import img6 from '../../assets/about-images/img6.jpg';
import img7 from '../../assets/about-images/img7.jpg';
import img8 from '../../assets/about-images/img8.jpg';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          minHeight: '90vh',
          padding: '5vh'
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <Carousel 
            interval={1500}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}>
              <div>
                <img src={img8} style={{height: '80vh'}}/>
              </div>
              <div>
                <img src={img3} style={{height: '80vh'}}/>
              </div>
              <div>
                <img src={img4} style={{height: '80vh'}}/>
              </div>
              <div>
                <img src={img5} style={{height: '80vh'}}/>
              </div>
              <div>
                <img src={img6} style={{height: '80vh'}}/>
              </div>
              <div>
                <img src={img7} style={{height: '80vh'}}/>
              </div>
          </Carousel>
            </Grid>
            <Grid item xs={12} md={6} spacing={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant='h4'>
                  Our Story
                  </Typography>
                  <Divider sx={{margin: '1vh'}}/>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body4'>
                  Welcome to Wok Restaurant, a culinary gem nestled on the picturesque shores of the Danube River in Orsova, Romania. Our restaurant is a harmonious blend of breathtaking natural beauty, warm hospitality, and exceptional cuisine, offering you a dining experience that is both delightful and memorable.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body4'>
                  Indulge in a culinary journey with our thoughtfully crafted menu, featuring a harmonious fusion of authentic Romanian flavors and international influences. Savor the delicate textures and robust aromas as you explore our selection of delectable appetizers, hearty mains, and irresistible desserts, all prepared with the freshest locally sourced ingredients.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body4'>
                  As you savor your meal, our attentive staff will ensure that your every need is met, providing friendly and personalized service that reflects the warm hospitality of Orsova. Whether you're enjoying a romantic dinner by candlelight or gathering with friends and family, we strive to create a welcoming and comfortable ambiance that enhances your dining experience.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body4'>
                  Escape the ordinary and embark on a culinary adventure at Wok Restaurant in Orsova. Let the tranquil beauty of the Danube captivate you as you indulge in the flavors of Romania, in an ambiance that exudes warmth and elegance. We eagerly await the opportunity to welcome you and create a dining experience that will leave a lasting impression.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
    </Layout>
  )
}

export default About;