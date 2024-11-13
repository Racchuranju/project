// frontend/src/components/StudentEnrollment.js

import React, { useState } from 'react';
import axios from 'axios';

function StudentEnrollment() {
    const [student, setStudent] = useState({ firstName: '', lastName: '', age: '', grade: '' });

    // Handle changes in the input fields
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent page refresh
        try {
            // Send a POST request to add a new student to the database
            await axios.post('http://localhost:5000/students', student);
            alert('Student added successfully');
        } catch (err) {
            console.error('Error adding student:', err);
            alert('There was an error adding the student.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={student.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={student.lastName}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={student.age}
                onChange={handleChange}
            />
            <input
                type="text"
                name="grade"
                placeholder="Grade"
                value={student.grade}
                onChange={handleChange}
            />
            <button type="submit">Add Student</button>
        </form>
    );
}

export default StudentEnrollment;
