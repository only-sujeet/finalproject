import { Box, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
 import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import Header from '../Global/Header'

const Dashboard = () => {
   const { isAuthenticated } = useSelector((state) => (state.admin))
  const navigate = useNavigate()

  useEffect(() => {
   isAuthenticated ? navigate('/dashboard') : navigate('/adlogin')
  }, [isAuthenticated])
  
  //  isAuthenticated ? navigate("/dashboard") : navigate('/adlogin')
  return (
    <div className='app'>
      <AdminSidebar />
      <main className='content'>
        <AdminTopbar />
        <Box m="15px">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to Yuor Dashboard" />
          </Box>
          <Box>
            <Typography variant="h1" color="initial">hello</Typography>
          </Box>
        </Box>
      </main>
    </div>
  )
}

export default Dashboard