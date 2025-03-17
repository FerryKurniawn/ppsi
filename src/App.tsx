import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Suratmasuk from "./components/Surat-masuk";
import Sidebar from "./components/sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/surat-masuk" element={<Suratmasuk />} />
          <Route path="/sidebar" element={<Sidebar/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
