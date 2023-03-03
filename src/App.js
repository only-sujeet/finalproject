
import AdminLogin from './Components/Admin/AdminLogin';
import Aforgetpassword from './Components/Admin/Aforgetpassword';
import AdminHome from './Components/Admin/AdminHome';
import Empregister from './Components/Employee/Empregister';
import Emplogin from './Components/Employee/Emplogin';
import {  Routes, Route } from "react-router-dom"

import { ColorModeContext, useMode } from "./Global";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./Components/Admin/Dashboard";
import Employee from "./Components/Admin/Employee";
import RequestedEmployee from "./Components/Admin/RequestedEmployee";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Loaduser } from './Redux/Actions/Admin/Login';
function App() {


  const [theme, colorMode] = useMode()
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(Loaduser())

    
  },[] )
 
  
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
          
              <Routes>
                <Route exact path='/empregister' element={<Empregister />} />
                <Route exact path='/adlogin' element={<AdminLogin />} />
                <Route exact path='/aforgot' element={<Aforgetpassword />} />
                <Route exact path='/ahome' element={<AdminHome />} />
                <Route exact path='/emplogin' element={<Emplogin />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/aemployee" element={<Employee/>} />
                <Route exact path="/aremployee" element={<RequestedEmployee/>} />
              </Routes>
            
          </main>

        </div >

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
