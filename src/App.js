import React, { useState } from "react";
import "./App.css";

import InputField from "./components/InputFeild.js";
import Button from "./components/Button.js";
import axios from 'axios';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [regiusername, setRegiusername]=useState("");
  const [regipassword, setRegipassword]=useState("");
  const [regiaddress, setRegiaddress]=useState("");
  const [regimobile, setRegimobile]=useState("");
  const [regiemail,setEmail]=useState("");
  const [msg, setMsg] = useState("");
  const [message,setMessage] = useState("");


  const loginclick = () => {
        const inputdata = {username, password}
        axios.post('http://localhost:8080/login', inputdata).then((message)=>{
          setMessage(message.data.message)})
      };

  const regiclick = () => {

        const data ={regiusername, regipassword, regiemail,regiaddress,regimobile}
       axios.post('http://localhost:8080/registartion', data ).then((result) => {
         setMsg(result.data.message)
       })
      
  };

  return (
    <div>
      <div className="container">
        <h1>Log in</h1>
        <div className="con1">
          <InputField
            type="text"
            placeholder="enter your name"
            onChange={(e) => setUsername(e.target.value)}
            label=" User Name : "
          />
          <InputField
            type="password"
            placeholder="enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            label=" PassWord : "
          />
          <Button onClick={loginclick}>Log In</Button>

          <div>
          <p>{message}</p>
          </div>
        </div>
      </div>
      <div className="container2">
        <h1>Not yet registred?</h1>
        <div className="con1">
          <InputField
            type="text"
            placeholder="enter your name"
            onChange={(e) => setRegiusername(e.target.value)}
            label=" User Name : "
          />
          <InputField
            type="password"
            placeholder="enter your Password"
            onChange={(e) => setRegipassword(e.target.value)}
            label=" PassWord : "
          />
          <InputField
            type="email"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
            label=" E-mail address : "
          />
           <InputField
            type="text"
            placeholder="enter your address"
            onChange={(e) => setRegiaddress(e.target.value)}
            label=" Address : "
          />
           <InputField
            type="number"
            placeholder="enter your Number"
            onChange={(e) => setRegimobile(e.target.value)}
            label=" Mobile Number : "
          />
          <Button onClick={regiclick}>Create new account</Button>
        </div>
        <div>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
