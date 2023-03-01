import React, { useContext } from 'react'
import { ColorModeContext, tokens } from "../../Global";

import { Box, IconButton, useTheme, InputBase } from '@mui/material';

import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined, SearchOutlined } from '@mui/icons-material';

const AdminTopbar = () => {
  const themes = useTheme()
  const colors = tokens(themes.palette.mode)
  const colorModes = useContext(ColorModeContext)
  return (

    <>

        <Box display="flex" justifyContent="space-between" p={2} >

          {/* search bar */}
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton tpye="button" sx={{ p: 1 }}>
              <SearchOutlined />
            </IconButton>
          </Box>
          {/* icon button */}
          <Box display="flex">

            <IconButton onClick={colorModes.toggleColorMode}>
              {themes.palette.mode === "light" ? (<DarkModeOutlined />) : (<LightModeOutlined />)}
            </IconButton>
            <IconButton>
              <NotificationsOutlined />
            </IconButton>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <IconButton>
              <PersonOutlined />
            </IconButton>
          </Box>
        </Box>
    
    </>
  )
}

export default AdminTopbar