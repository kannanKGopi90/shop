import './App.css';
import { Dashboard } from './components/dashboard';
import { BrowserRouter,Router,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <h1>LOGIN</h1>
      <div className="login_outer_div">
        <div className="login_inner_div">
        <input type="text" placeholder="user name"></input>
        <br/>
        <input type="text" placeholder="password"></input><br/>
        </div>
        <button>submit</button>
      </div>
      </>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
