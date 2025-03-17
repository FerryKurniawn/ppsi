import React from "react";

export default function suratmasuk() {
  return (
    <>
      <div className="flex">
        <div className="w-[450px] ml-5 flex flex-col items-center mt-[40px] shadow-md h-screen">
          <img src="man1.png" alt="" width="225" className="mt-10" />
          <div className="flex flex-col items-center mt-[40px] text-2xl font-semibold">
            <h1>SIMANIS</h1>
            <h2>SISTEM INFORMASI</h2>
            <h2>MADRASAH ALIYAH NEGERI 1 SINTANG</h2>
          </div>
          <div className="p-10 rounded-lg shadow-lg mt-[40px]">
            <div className="flex items-center gap-4 p-2 mb-[20px] w-[300px] bg-[#34542C50] rounded-lg cursor-pointer">
              <img
                src="surat_masuk.png"
                alt="Surat Masuk"
                className="w-[23px] h-[23px]"
              />
              <span className="text-black font-semibold text-2xl">
                Surat Masuk
              </span>
            </div>
            <div className="flex items-center gap-4 mb-[20px] w-[300px] p-2 rounded-lg  cursor-pointer ">
              <img
                src="surat_keluar.png"
                alt="Surat Keluar"
                className="w-[23px] h-[23px]"
              />
              <span className="text-gray-600 text-2xl font-semibold">
                Surat Keluar
              </span>
            </div>
            <div className="flex items-center gap-4 p-2 w-[300px] rounded-lg cursor-pointer ">
              <img
                src="disposisi.png"
                alt="Disposisi"
                className="w-[23px] h-[23px]"
              />
              <span className="text-gray-600 text-2xl font-semibold">
                Disposisi
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1>Surat Masuk</h1>
        </div>
      </div>
    </>
  );
}
