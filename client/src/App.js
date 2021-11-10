import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import UnprotectedRoute from './components/UnprotectedRoute';
import AllTrails from './pages/AllTrails';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import TrailDetails from './pages/TrailDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <UnprotectedRoute path="/login" component={Login} />
          <UnprotectedRoute path="/register" component={Register} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/details/:trailName" component={TrailDetails} />
          <Route path="/trails" component={AllTrails} />

          <Route path='*'><Redirect to='/' /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
