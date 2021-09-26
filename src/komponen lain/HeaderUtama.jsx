import React from "react";

export default function HeaderUtama() {
  return (
    <div className="  flex justify-center ">
      <div className="h-20 bg-blue-500 w-screen flex items-center justify-center px-4">
        <div className="flex items-center gap-x-2 px-3   w-full bg-white border-2 rounded-lg">
          <input
            type="text"
            placeholder="Cari Buku"
            className=" border-none w-full    p-2"
          />
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
