import React, { useEffect } from "react";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Player from "./pages/Plalyer/Player.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const  navGate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        navGate('/')
      }else{
        navGate('/login')
      }
    })
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
