import { Alert, AlertTitle, Box, Button, Divider } from '@mui/material';
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
import CategoryAlert from './CategoryAlert';

const schema = yup.object().shape({
    email: yup.string().required(),
  });

const initialState = {
  name: ''
};

const Categories = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schema)});
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [category, setCategory] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);
    const [toDelete, setToDelete] = useState(null);

    useEffect(() => {
        dispatch(getAllCategories());
      }, [dispatch]);

    const handleAddCategory = () => {
      setCategory(initialState);
      setIsEdit(false);
      setOpenPopup(true);  
    }

  return (
    <AdminLayout>
        <Box sx={{margin: '20px', minHeight: '100vh', justifyContent: 'center', justifyItems: 'center'}}>
        <Button 
        sx={{
          "&":{
            background: 'black',
            margin: '0.6vh'
          },
          "&:hover":{
              background: 'grey',
          }}}
        variant="contained"
        onClick={handleAddCategory}>Add Category</Button>
        <Divider sx={{margin: '20px'}}/>
        <CategoriesGrid
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        setOpenPopup={setOpenPopup}
        setCategory={setCategory}
        setToDelete={setToDelete}
        setOpenAlert={setOpenAlert}/>
        </Box>
        <CategoryPopup 
        title={isEdit ? 'Edit Category' : 'Add Category'} 
        openPopup={openPopup} 
        setOpenPopup={setOpenPopup}>
          <AddCategoryForm 
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          isEdit={isEdit}
          category={category}/>
        </CategoryPopup>
        {
          openAlert &&
          <CategoryAlert category={toDelete} setOpenAlert={setOpenAlert} openAlert={openAlert}/>
        }
    </AdminLayout>
  )
}

export default Categories;