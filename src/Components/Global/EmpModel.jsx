import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, useTheme, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tokens } from '../../Global'
import { conTempEmp, getTempEmp } from '../../Redux/Actions/Admin/Employee'
import Loader from './Loader'

const EmpModel = () => {
  const themes = useTheme()
  const colors = tokens(themes.palette.mode)
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { data } = useSelector(state => ({ ...state.admin.admin }))
  const { loading } = useSelector(state => ({ ...state.admin }))
  const dispatch = useDispatch()
  console.log(data)
  useEffect(() => {
    dispatch(getTempEmp())
  }, [dispatch])

  const handleClose = () => {
    setOpen(false);
  };

  const confirm = (id) => {
    dispatch(conTempEmp(id))
    dispatch(getTempEmp())
  }
  return (
    <>{loading ? <Loader /> : (<Box>
      <Button variant="contained" onClick={handleClickOpen} color="secondary" sx={{ borderRadius: "100px" }}>
        Requests
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" PaperProps={{ sx: { position: "" } }}>
        <DialogTitle>
          <Typography variant="h4" color={colors.blueAccent[400]}>Employee Request</Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: 'fit-content',
          }}>

            <TableContainer component={Paper}>
              <Table size="medium" sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Phone NO.</TableCell>
                    <TableCell>Buttons</TableCell>
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
                        <TableCell ><Button variant="contained" color="primary" onClick={() => { confirm(data._id) }} >
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </Box>)}

    </>
  )
}

export default EmpModel