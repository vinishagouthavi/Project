import './Registration.css';
import React, { useState } from 'react';

const Registration = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const lettersRegex = /^[A-Za-z]+$/;

    if (value === '' || lettersRegex.test(value)) {
      setName(value);
    } else {
      setName('');
    }

    if (name === 'dob') {
      setDob(value);
      calculateAge(value);
    }
  };

  const calculateAge = (dobValue) => {
    const today = new Date();
    const birthDate = new Date(dobValue);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration form submitted:', name);
    };

  return (
    <div className='Register'>
      <h1>Registration Form</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label><span className="mandatory">*</span>
          <input
            type="text"
            name="name"
            placeholder='name'
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            placeholder='age'
            value={age}
            readOnly
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>DOB:</label><span className="mandatory">*</span>
          <input
            type="date"
            name="dob"
            placeholder='dob'
            value={dob}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
        </div>

        <div>
          <label>Phone Number:</label><span className="mandatory">*</span>
          <input 
          type="tel" 
          name="phone" 
          placeholder='phone' />
        </div>

        <div>
          <label>Email-id:</label><span className="mandatory">*</span>
          <input 
          type="email" 
          name="email" 
          placeholder='email' />
        </div>

        <div>
          <label>Password:</label><span className="mandatory">*</span>
          <input 
          type="password" 
          name="password" 
          placeholder='password' />
        </div>

        <div>
          <button 
          type="submit" 
          className='Rsgbtn'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
