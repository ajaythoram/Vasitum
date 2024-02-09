import React, { useState, useEffect } from 'react';
import '../Schedule/Schedule.css';

const SchedulePage = () => {
  const [meetingData, setMeetingData] = useState([]);
  const [formData, setFormData] = useState({
    time: '',
    description: ''
  });

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('meetingData');
    if (storedData) {
      setMeetingData(JSON.parse(storedData));
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
    const newMeeting = {
      id: Date.now(),
      ...formData
    };
    setMeetingData([...meetingData, newMeeting]);
    // Save to local storage
    localStorage.setItem('meetingData', JSON.stringify([...meetingData, newMeeting]));
    console.log('New meeting scheduled:', newMeeting);
    setFormData({
      time: '',
      description: ''
    });
  };

  return (
    <div className="schedule-container">
      <h2>Schedule Page</h2>
      <form className="schedule-form" onSubmit={handleSubmit}>
        <label>
          Time:
          <input type="datetime-local" name="time" value={formData.time} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
        <button type="submit">Schedule Meeting</button>
      </form>
    </div>
  );
};

export default SchedulePage;
