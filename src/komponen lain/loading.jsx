import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


export default function Loading() {
  return (
    <React.Fragment>
      <div className="border grid grid-cols-6 my-3 h-64 p-4 gap-x-4 animate-pulse bg-gray-100 gap-y-7 rounded-md overflow-y-auto ">
        <div className=" h-44 col-span-2 bg-gray-300 rounded-lg">
          <img src="" alt="" className=" h-44" />
        </div>
        <div className="col-start-3 col-end-6 bg-gray-300 rounded-lg">
          <h1 className="text-3x bg-gray-300l">   </h1>
          <h3 className="text-lg bg-gray-300">  </h3>
          <h3 className='bg-gray-300'>  </h3>
          <h4 className='bg-gray-300'>  </h4>
          <p className='bg-gray-300'>  </p>
          <div className="space-x-2 mt-6 bg-gray-300">
            <Link
              to="/update-buku"
              className="px-4 py-1 mt-4 bg-gray-300 text-white rounded-xl"
            ></Link>
            <button className='bg-gray-300'></button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
