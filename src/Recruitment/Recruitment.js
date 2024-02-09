import React, { useState } from 'react';
import '../Recruitment/Recruitment.css';

const Recruitment = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    skills: '',
    experience: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('formDataArray')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('formDataArray', JSON.stringify(updatedData));
    setFormData({
      jobTitle: '',
      skills: '',
      experience: ''
    });
  };

  return (
    <div className="recruitment-container">
      <h2>Recruitment</h2>
      <form className="recruitment-form" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type='text' name='jobTitle' placeholder='Title' value={formData.jobTitle} onChange={handleChange} />
        </div>
        <div>
          <label>Skills</label>
          <input type='text' name='skills' placeholder='Skills' value={formData.skills} onChange={handleChange} />
        </div>
        <div>
          <label>Experience</label>
          <input type='number' name='experience' placeholder='Experience' value={formData.experience} onChange={handleChange} />
        </div>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};

export default Recruitment;
