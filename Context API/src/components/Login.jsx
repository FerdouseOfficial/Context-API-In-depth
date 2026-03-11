import React, { useContext, useState } from "react";
import UserContext from '../context/UserContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {

  }

  return (
    <div>
      <h2>Log In</h2>
      <input 
      value={username}
      onChange={(e) => (setUsername(e.target.value))}
      type="text" placeholder="Enter Your Name" />
      <input 
      value={password}
      onChange={(e) => (setPassword(e.target.value))}
      type="text" placeholder="Password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
