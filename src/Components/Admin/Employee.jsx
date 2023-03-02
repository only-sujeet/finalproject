import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import EmpModel from '../Global/EmpModel'
import Header from '../Global/Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Employee = () => {
    const { isAuthenticated } = useSelector((state) => (state.admin))
    const navigate = useNavigate()
    useEffect(() => {
        isAuthenticated ? navigate('/aemployee') : navigate('/adlogin')
    }, [isAuthenticated])
    

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />

                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Employee" subtitle="Welcome Your Employee Details Page" />
                        <EmpModel />
                        
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </main>
        </div>
    )
}

export default Employee