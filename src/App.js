import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './pages/login/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    </div>
  );
}

export default App;
