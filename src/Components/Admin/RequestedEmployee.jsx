import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, Paper, Button } from '@mui/material'
import React, { useEffect } from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import EmpModel from '../Global/EmpModel'
import Header from '../Global/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { tokens } from '../../Global'
import { getTempEmp, conTempEmp } from '../../Redux/Actions/Admin/Employee'

const RequestedEmployee = () => {
    const themes = useTheme()
    const colors = tokens(themes.palette.mode)
    const { isAuthenticated, loading } = useSelector((state) => (state.admin))
    const { data } = useSelector((state) => (state.admin.data))
    console.log(data)


    const dispatch = useDispatch()

    useEffect(() => {
        // isAuthenticated ? navigate('/aemployee') : navigate('/adlogin')
        dispatch(getTempEmp())
    }, [isAuthenticated])
    const confirm = (id) => {
        dispatch(conTempEmp(id))
        dispatch(getTempEmp())
    }

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />

                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Requested Employees" subtitle="Welcome Your Requested Employees Details Page" />


                    </Box>

                    <Box alignItems="center" justifyContent="center" m="15px" >
                        <Typography variant="h3" color={colors.redAccent[600]}>Employees Details</Typography>
                        <TableContainer sx={{ mt: "10px" }} component={Paper}>
                            <Table size='small' >
                                <TableHead  >
                                    <TableRow sx={{ backgroundColor: colors.greenAccent[800] }}>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell>Phone NO.</TableCell>
                                        <TableCell>Opratons</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data?.map((data) => (
                                            <TableRow key={data._id}>
                                                <TableCell >{data.name}</TableCell>
                                                <TableCell >{data.email}</TableCell>
                                                <TableCell >{data.gender}</TableCell>
                                                <TableCell >{data.phone}</TableCell>
                                                <TableCell >
                                                    <Button variant="contained" color="primary" onClick={() => { confirm(data._id) }} >
                                                        Confirm
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </main>
        </div>
    )
}

export default RequestedEmployee