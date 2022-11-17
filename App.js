import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/mdbootstrap/css/mdb.min.css";
import "../node_modules/jquery-ui-dist/jquery-ui";
import "./assets/css/style.css";
import "./assets/css/fonts.css";
import "./assets/css/font-awesome-all.css";
import "./assets/css/datepicker.css";

import Dashboard from "./Components/Dashboard";
import Contacts from "./Components/Contacts";
import Deals from "./Components/Deals";
import SideNavbar from "./Components/SideNavbar";
// import VerifyLogin from "./Components/VerifyLogin";
// import Login from "./Components/Login";
// import ForgotPassword from "./Components/ForgotPassword";
// import ResetPassword from "./Components/ResetPassword";



const App = () => {
  return (
    <>

    <BrowserRouter>
    <SideNavbar>
      <Routes>
      
        <Route path="/" element={<Dashboard/>}/>
        {/* <Route path="/Login" element={<Login/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/> 
        <Route path="/VerifyLogin" element={<VerifyLogin/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/> */}
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Deals" element={<Deals/>} />
      </Routes>
      </SideNavbar>
    </BrowserRouter>
     
    </>
  )
}


export default App
