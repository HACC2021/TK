import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
