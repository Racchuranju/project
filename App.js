import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import StudentEnrollment from './components/StudentEnrollment';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/students" component={StudentEnrollment} />
            </Switch>
        </Router>
    );
}

export default App;
