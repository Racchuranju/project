import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the School Management System</h1>
            <nav>
                <ul>
                    <li><Link to="/students">View Students</Link></li>
                    <li><Link to="/enroll">Enroll Student</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
