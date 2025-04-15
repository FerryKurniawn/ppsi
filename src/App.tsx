import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Suratmasuk from "./components/Surat-masuk";
import Suratkeluar from "./components/Surat-keluar";
import RekapSuratMasuk from "./components/Rekap-surat-masuk";
import RekapSuratKeluar from "./components/Rekap-surat-keluar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/surat-masuk" element={<Suratmasuk />} />
          <Route path="/surat-keluar" element={<Suratkeluar />} />
          <Route path="/Rekap-surat-masuk" element={<RekapSuratMasuk />} />
          <Route path="/Rekap-surat-keluar" element={<RekapSuratKeluar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
