import React from 'react'
import WorkerHeader from './WorkerHeader';
import Footer from '../Layout/Footer';

const WorkerLayout = ({children}) => {
  return (
    <>
    <WorkerHeader />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default WorkerLayout;