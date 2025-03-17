import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Suratmasuk from "./components/Surat-masuk";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/surat-masuk" element={<Suratmasuk />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
