import React, { useState, useEffect } from 'react';
import { getCategories, getDailyMenu } from '../api';
import Layout from '../components/Layout/Layout';

const Menu = () => {
  const [categories, setCategories] = useState(null);
  const [dailyMenu, setDailyMenu] = useState(null);

  useEffect(() => {
    getCategories()
    .then((response) => {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
  }, []);

  useEffect(() => {
    getDailyMenu()
    .then((response) => {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
  }, []);

  return (
    <Layout>
        <h1>Menu Page</h1>
    </Layout>
  )
}

export default Menu;