import React from "react";

export default function SuratMasukKepalaSekolah() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[350px] bg-white shadow-lg flex flex-col items-center h-screen fixed left-0 top-0 z-20">
        <img src="logo.png" alt="Logo" width="200" className="mt-2" />
        <div className="flex flex-col items-center mt-4 text-xl font-semibold text-center px-4">
          <h1>ARISMA</h1>
          <h2>SISTEM INFORMASI</h2>
          <h2>MADRASAH ALIYAH NEGERI 1 SINTANG</h2>
        </div>
        <div className="p-6 mt-6 w-full">
          <div className="flex items-center gap-4 p-3 mb-4 w-full bg-[#34542C50] rounded-lg cursor-pointer">
            <img src="surat_masuk.png" alt="Surat Masuk" className="w-6 h-6" />
            <span className="text-gray-800 text-lg font-semibold">Surat Masuk</span>
          </div>
          <div className="flex items-center gap-4 p-3 w-full bg-white rounded-lg hover:bg-gray-100 cursor-pointer">
            <img src="surat_keluar.png" alt="Surat Keluar" className="w-6 h-6" />
            <span className="text-black font-semibold text-lg">Surat Keluar</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-[350px] flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="w-full bg-white shadow px-6 py-4 flex justify-end items-center">
          <div className="relative group">
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
              Kepala Sekolah
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profil</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Keluar</li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Form */}
        <main className="flex-1 p-10">
          <div className="flex justify-between items-center max-w-3xl ml-16">
            <h1 className="text-2xl font-semibold">Detail Surat Masuk</h1>
            <button className="text-gray-600 hover:text-black text-xl">↩</button>
          </div>

          <form className="mt-8 space-y-6 max-w-3xl w-full px-4 ml-16">
            <div>
              <label className="block font-medium">No. Surat</label>
              <input type="text" className="w-full border rounded px-4 py-2" />
            </div>

            <div>
              <label className="block font-medium">Perihal</label>
              <input type="text" className="w-full border rounded px-4 py-2" />
            </div>

            <div>
              <label className="block font-medium">Alamat Pengirim</label>
              <input type="text" className="w-full border rounded px-4 py-2" />
            </div>

            <div>
              <label className="block font-medium">Tanggal Terima</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2"
                placeholder="DD/MM/YYYY"
              />
            </div>

            <div>
              <label className="block font-medium">Sifat Surat</label>
              <select className="w-full border rounded px-4 py-2">
                <option value="sangat-segera">Sangat Segera</option>
                <option value="segera">Segera</option>
                <option value="biasa">Biasa</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">File Surat</label>
              <input type="file" className="w-full border rounded px-4 py-2 bg-white" />
            </div>

            {/* Form Disposisi */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Form Disposisi</h2>
              <div>
                <label className="block font-medium">Disposisi Kan Ke</label>
                <select className="w-full border rounded px-4 py-2">
                  <option value="admin-tu-1">Admin TU 1</option>
                  <option value="admin-tu-1">Admin TU 2</option>
                </select>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-10 rounded"
              >
                Tambah
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}