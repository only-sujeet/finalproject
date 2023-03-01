import { Box } from '@mui/material'
import React from 'react'
import AdminSidebar from '../Global/AdminSidebar'
import AdminTopbar from '../Global/AdminTopbar'
import EmpModel from '../Global/EmpModel'
import Header from '../Global/Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Employee = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { isAuthenticated } = useSelector((state) => (state.admin))
    const navigate = useNavigate()
    // isAuthenticated ? navigate("/aemployee") : navigate('/adlogin')

    return (
        <div className='app'>
            <AdminSidebar />
            <main className='content'>
                <AdminTopbar />

                <Box m="15px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Employee" subtitle="Welcome Your Employee Details Page" />
                        <EmpModel/>
                        {/* <Button variant="outlined" onClick={handleClickOpen}>
                            Open form dialog
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Subscribe</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    To subscribe to this website, please enter your email address here. We
                                    will send updates occasionally.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Subscribe</Button>
                            </DialogActions>
                        </Dialog> */}
                        {/* <EmpModel/> */}
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </main>
        </div>
    )
}

export default Employee