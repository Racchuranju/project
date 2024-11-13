import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentEnrollment from './components/StudentEnrollment';
import StudentList from './components/StudentList';
import Home from './components/Home';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/enroll" component={StudentEnrollment} />
                <Route path="/students" component={StudentList} />
            </Switch>
        </Router>
    );
}

export default App;
