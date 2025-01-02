import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { List, Order, Add } from "./pages/index.js";
import Login from "./components/Login.jsx";
import { ToastContainer } from 'react-toastify';

export const beckendUrl = import.meta.env.VITE_BACKEND_URL
const App = () => {
  const [token, setToken] = useState("");
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vm, 25px)] my-8 text-grya-600 text-base">
              <Routes>
                <Route path="/" element={<Add />} />
                <Route path="/order" element={<Order />} />
                <Route path="/List" element={<List />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
