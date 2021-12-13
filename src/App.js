import './App.css';
import React ,{Component} from "react";
import { Dashboard } from './components/dashboard';
import { Route,Routes,Router } from 'react-router-dom';
import {useState} from 'react';
import { collection,where,getDocs,query } from 'firebase/firestore';
import db from './firebase/firebase';

export const Protect=({component:Component,...rest})=>{
  return(
    <Route
     {...rest}
      render={(props)=>{
        getCookies() ? (
          <Component {...props}/>
        ) : (
          <Component {...props}/>
        )
      }
    }/>
  )
}

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
      <Routes>
        <Route exact path="/path" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
