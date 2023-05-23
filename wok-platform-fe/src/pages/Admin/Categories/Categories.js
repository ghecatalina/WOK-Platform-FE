import { Box, Button, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CategoriesGrid from './CategoriesGrid';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../../../actions/categories';
import AdminLayout from '../../../components/AdminLayout/AdminLayout';
import CategoryPopup from './CategoryPopup';
import AddCategoryForm from './AddCategoryForm';

const schema = yup.object().shape({
    email: yup.string().required(),
  });

const Categories = () => {
    const [openPopup, setOpenPopup] = useState(false);
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
        onClick={() => setOpenPopup(true)}>Add Category</Button>
        <Divider sx={{margin: '20px'}}/>
        <CategoriesGrid />
        </Box>
        <CategoryPopup title="Add Category" openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <AddCategoryForm 
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}/>
        </CategoryPopup>
    </AdminLayout>
  )
}

export default Categories;