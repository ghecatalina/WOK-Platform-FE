import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import CategoriesGrid from './CategoriesGrid';
import { useDispatch, useSelector } from 'react-redux';
import DailyMenu from './DailyMenu';
import { getCategoriesAndDaily } from '../actions/multipleActions';
import {Divider, Grid } from '@mui/material';

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAndDaily());
  }, [dispatch]);

  return (
    <Layout>
      <Grid container direction="row"
      justifyContent="space-between"
      alignItems="flex-start">
        <Grid item xs={12}>
          <DailyMenu />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <CategoriesGrid />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Menu;