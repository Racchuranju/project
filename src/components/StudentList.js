import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function fetchStudents() {
            const result = await axios.get('http://localhost:5000/students');
            setStudents(result.data);
        }
        fetchStudents();
    }, []);

    return (
        <div className="student-list">
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id}>{student.firstName} {student.lastName}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
