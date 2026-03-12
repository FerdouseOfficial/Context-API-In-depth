import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex flex-col h-1/2 w-1/2 bg-amber-700 rounded m-auto mt-50">
      <h2 className="text-center text-2xl font-[apple]">Log In</h2>
      <input
        className="px-4 py-2 border-2 font-[apple] text-xl m-2 outline-none"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter Your Name"
      />
      <input
        className="px-4 py-2 border-2 font-[apple] text-xl m-2 outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
      />
      <button
        className="bg-amber-400 rounded-2xl px-4 py-2 m-1"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
