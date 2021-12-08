import './App.css';
import { Dashboard } from './components/dashboard';
import { BrowserRouter,Router,Switch } from 'react-router-dom';
import {useState} from 'react';
import { collection,where,getDocs,query } from 'firebase/firestore';
import db from './firebase/firebase';
import { async } from '@firebase/util';

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  
  let handleClick =async()=>{
    console.log("user",username);
    let q =query(collection(db,"users"),where("username","==",username),where("password","==",password))
    let snapshot =await getDocs(q)
    snapshot.forEach(doc => {
      console.log(doc.data());
    });
    
  }
  return (
    <div className="App">
      <>
      <h1>LOGIN</h1>
      <div className="login_outer_div">
        <div className="login_inner_div">
        <input type="text" placeholder="user name" onChange={(e)=>{setusername(e.target.value)}}></input>
        <br/>
        <input type="text" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}></input><br/>
        </div>
        <button onClick={()=>handleClick()}>submit</button>
      </div>
      </>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
