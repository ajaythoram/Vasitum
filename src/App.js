import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar.js";
import Recruitment from "./Recruitment/Recruitment.js";
import Employee from "./Components/Employee/Employee.js";
import Dashboardc from "./Components/Dashboard/Dashboard.js";
import Schedule from "./Components/Schedule/Schedule.js";

const App = () => {
  return (
   <BrowserRouter>
    <Sidebar />
    <Navbar />
     <Routes>
          <Route path="/"  element={<Dashboardc />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/schedule" element={<Schedule />} />
        
     
    </Routes>
   </BrowserRouter>
  );
};

export default App;
