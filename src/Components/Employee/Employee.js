import React, { useState, useEffect } from 'react';
import "../Employee/Employee.css";

const Employee = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    gender: ''
  });

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('employeeData');
    if (storedData) {
      setEmployeeData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(),
      ...formData
    };
    setEmployeeData([...employeeData, newEmployee]);
    // Save to local storage
    localStorage.setItem('employeeData', JSON.stringify([...employeeData, newEmployee]));
    console.log('New employee registered:', newEmployee);
    setFormData({
      name: '',
      department: '',
      gender: ''
    });
  };

  return (
    <div className='employee-container'>
      <h2>Employee Page</h2>
      <form className='employee-form' onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Department:</label>
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="Developer">Developer</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Software">Software</option>
          </select>
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit">Register Employee</button>
      </form>
    </div>
  );
};

export default Employee;
