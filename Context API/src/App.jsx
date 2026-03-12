import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <h1 className="text-center font-bold text-2xl mt-4 tracking-widest">Chai Or code is awesome</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
