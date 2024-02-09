import React, { useState } from 'react';
import "../Sidebar/Sidebar.css";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import logo from "../Resources/Vasitum Logo (1) 1.png";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const navigator = useNavigate();


    const handleClick = (itemName) => {
        setActiveItem(itemName);
        navigator(`/${itemName}`)
    };

    return (
        <div id="sidebar">
            <div id="sidebar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div id="sidebar-menu">
                <h5>MAIN MENU</h5>
                <div className={activeItem === 'Dashboard' ? 'clicked' : ''} onClick={()=> navigator("/")}>
    <DashboardIcon />
    <h3>Dashboard</h3>
</div>
                <div className={activeItem === 'Recruitment' ? 'clicked' : ''} onClick={() => handleClick('Recruitment')}>
                    <PersonAddIcon />
                    <h3>Recruitment</h3>
                </div>
                <div className={activeItem === 'Schedule' ? 'clicked' : ''} onClick={() => handleClick('Schedule')}>
                    <CalendarTodayIcon />
                    <h3>Schedule</h3>
                </div>
                <div className={activeItem === 'Employee' ? 'clicked' : ''} onClick={() => handleClick('Employee')}>
                    <GroupsIcon />
                    <h3>Employee</h3>
                </div>
                <div className={activeItem === 'Department' ? 'clicked' : ''} onClick={() => handleClick('Department')}>
                    <ApartmentIcon />
                    <h3>Department</h3>
                </div>
            </div>
            <div id="sidebar-other">
                <h5>OTHERS</h5>
                <div className={activeItem === 'Support' ? 'clicked' : ''} onClick={() => handleClick('Support')} >
                    <SupportAgentIcon />
                    <h3>Support</h3>
                </div>
                <div className={activeItem === 'Settings' ? 'clicked' : ''} onClick={() => handleClick('Settings')}>
                    <SettingsSuggestIcon />
                    <h3>Settings</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
