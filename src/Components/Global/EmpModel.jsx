import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, useTheme, TableContainer, Paper, Table, TableHead, TableRow, TableCell } from '@mui/material'
import React from 'react'
import { tokens } from '../../Global'

const EmpModel = () => {
  const themes = useTheme()
  const colors = tokens(themes.palette.mode)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Button variant="contained" onClick={handleClickOpen} color="secondary" sx={{borderRadius:"100px"}}>
        Requests
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" PaperProps={{ sx:{position:""}}}>
        <DialogTitle>
          <Typography variant="h4" color={colors.blueAccent[400]}>Employee Request</Typography>
        </DialogTitle>
        <DialogContent>
          <Box  sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}>

            <TableContainer component={Paper}>
                <Table size="medium"  sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Phone NO.</TableCell>
                      <TableCell>BUttons</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
            </TableContainer>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary"  variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  )
}

export default EmpModel