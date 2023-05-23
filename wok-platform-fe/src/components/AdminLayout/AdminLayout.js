import React from 'react'
import AdminHeader from './AdminHeader'
import Footer from '../Layout/Footer';

const AdminLayout = ({children}) => {
  return (
    <>
    <AdminHeader />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default AdminLayout