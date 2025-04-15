import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Suratmasuk from "./components/Surat-masuk";
import Suratkeluar from "./components/Surat-keluar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/surat-masuk" element={<Suratmasuk />} />
          <Route path="/surat-keluar" element={<Suratkeluar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
