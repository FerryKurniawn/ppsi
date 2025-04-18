import React from "react";
import { Eye } from "lucide-react";

export default function KepsekRekapSuratMasuk() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[350px] bg-white shadow-lg flex flex-col items-center h-screen fixed left-0 top-0 z-20">
        <img src="logo.png" alt="Logo" width="200" className="mt-2" />
        <div className="flex flex-col items-center mt-4 text-xl font-semibold text-center px-4">
          <h1>ARISMA</h1>
          <h2 className="text-sm font-medium">ARSIP DIGITAL</h2>
          <h2 className="text-sm font-medium">MADRASAH ALIYAH NEGERI 1</h2>
        </div>
        <div className="p-6 mt-6 w-full">
          <div className="flex items-center gap-4 p-3 mb-4 w-full bg-[#A9B5A0] rounded-lg">
            <span className="text-black font-semibold text-lg">🖊️ Surat Masuk</span>
          </div>
          <div className="flex items-center gap-4 p-3 w-full text-[#34542C] hover:bg-gray-100 rounded-lg cursor-pointer">
            <span className="text-lg font-semibold">📄 Disposisi</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-[350px] flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
          <div className="relative">
            <h1 className="text-xl font-semibold">Rekap Surat Masuk</h1>
          </div>
          <div className="relative group">
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              Kepala Sekolah
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Keluar</li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center gap-2 p-4">
          <input
            type="text"
            placeholder="Cari"
            className="border rounded px-4 py-2 w-64"
          />
          <button className="bg-gray-300 px-4 py-2 rounded">Cari</button>
        </div>

        {/* Content */}
        <main className="flex-1 p-10">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">No. Surat</th>
                  <th className="border px-4 py-2">Perihal</th>
                  <th className="border px-4 py-2">Alamat Pengirim</th>
                  <th className="border px-4 py-2">Tanggal Terima</th>
                  <th className="border px-4 py-2">Sifat Surat</th>
                  <th className="border px-4 py-2">Disposisi</th>
                  <th className="border px-4 py-2">Isi Disposisi</th>
                  <th className="border px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border px-4 py-2">2/54/2025</td>
                  <td className="border px-4 py-2">Undangan Komp</td>
                  <td className="border px-4 py-2">Universitas Tanjungpura</td>
                  <td className="border px-4 py-2">07/09/2024</td>
                  <td className="border px-4 py-2">Biasa</td>
                  <td className="border px-4 py-2">Kepala Sekolah</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2 flex justify-center gap-2">
                    <Eye className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
}