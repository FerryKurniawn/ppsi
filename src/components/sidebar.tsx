import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 min-h-screen bg-white-100 shadow-lg flex flex-col items-center p-4">
      <img
        src="public/man1.png" 
        alt="Logo MAN 1 Sintang"
        className="w-32 h-32 mb-4"
      />

      <h2 className="text-center text-gray-700 font-semibold text-sm">
        SISTEM INFORMASI PENGELOLAAN KEARSIPAN <br /> MAN 1 SINTANG
      </h2>

      <div className="mt-6 w-full flex flex-col gap-3">
        <button className="w-full flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <span role="img" aria-label="document">📄</span>
          Surat Masuk
        </button>

        <button className="w-full flex items-center gap-2 text-gray-700 px-4 py-2 rounded-lg hover:bg-white-200">
          <span role="img" aria-label="folder">📂</span>
          Surat Keluar
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
