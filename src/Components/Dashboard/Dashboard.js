import React, { useState, useEffect } from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./Dashboard.css";

const Dashboardc = () => {
  // Retrieve data from local storage
  const employeeData = JSON.parse(localStorage.getItem('employeeData')) || [];
  const meetingData = JSON.parse(localStorage.getItem('meetingData')) || [];

  // Calculate total employees, males, and females
  const totalEmployees = employeeData.length;
  const totalMales = employeeData.filter(employee => employee.gender === 'male').length;
  const totalFemales = employeeData.filter(employee => employee.gender === 'female').length;

  return (
    <div id="dashboard">
      <div id="dashboard-left">
        <div id="about-job">
          <div className="small-card" style={{backgroundColor:'#ffefe7'}}>
            <h5>Available Position</h5>
            <p style={{fontSize:26}}>24</p>
            <p>4 Urgently needed</p>
          </div>
          <div className="small-card" style={{backgroundColor:'#e8f0fb'}}>
            <h5>Job Open</h5>
            <p style={{fontSize:26}}>10</p>
            <p>4 Active hiring</p>
          </div>
          <div className="small-card" style={{backgroundColor:'#fdebf9'}}>
            <h5 >New Employees</h5>
            <p style={{fontSize:26}}>{totalEmployees}</p>
            <p>4 department</p>
          </div>
        </div>
        <div id="total">
          <div className="medium-card">
            <h5>Total Employees</h5>
            <h1>{totalEmployees}</h1>
            <p>{totalMales} men</p>
            <p>{totalFemales} women</p>
          </div>
          <div className="medium-card">
            <h5>Total Request</h5>
            <h1>16</h1>
            <p>6 men</p>
            <p>10 women</p>
          </div>
        </div>
        <div id="announcement">
          <div className="larg-card">
            <div id="anc-top">
              <h3>Announcement</h3>
            </div>
            <div id="anc-cards">
              <div className="mini">
                <span>Meeting Schedual with Hr</span>
                <div className="icons">
                  <PushPinIcon />
                  <MoreHorizIcon />
                </div>
              </div>
              <div className="mini">
                <span>Office demo for freshers </span>
                <div className="icons">
                  <PushPinIcon />
                  <MoreHorizIcon />
                </div>
              </div>
              <div className="mini">
                <span>New Recruitment verifications</span>
                <div className="icons">
                  <PushPinIcon />
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
            <p>See All Anouncement</p>
          </div>
        </div>
      </div>
      <div id="dashboard-right">
        <div id="activity">
          <h3> Recently Activity</h3>
          <p>10.40am, Fri 10 sept 2021</p>
          <h5>You Posted a new job</h5>
          <p>Kindely check the requirements and terms of work make sure everything is right</p>
          <div>
            <p>Today you makes 12 Activity</p>
            <button>See all Activity</button>
          </div>
        </div>
        <div id="schedule">
          <h2>Upcoming Schedule</h2>
          <div id="sch-cards">
            {meetingData.map(meeting => (
              <div key={meeting.id}>
                <p>Description: {meeting.description}</p>
                <p>Date and Time: {new Date(meeting.time).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardc;
